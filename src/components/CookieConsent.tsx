import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Prefs = { necessary: true; analytics: boolean; marketing: boolean };
const KEY = "sp_cookie_consent_v1";

const load = (): Prefs | null => {
  try { const v = localStorage.getItem(KEY); return v ? JSON.parse(v) : null; } catch { return null; }
};
const save = (p: Prefs) => { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch {} };

const CookieConsent = () => {
  const [open, setOpen] = useState(false);
  const [manage, setManage] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!load()) setOpen(true);
    const handler = () => { setManage(true); setOpen(true); };
    window.addEventListener("open-cookie-settings", handler);
    return () => window.removeEventListener("open-cookie-settings", handler);
  }, []);

  const acceptAll = () => { save({ necessary: true, analytics: true, marketing: true }); setOpen(false); };
  const declineAll = () => { save({ necessary: true, analytics: false, marketing: false }); setOpen(false); };
  const saveChoice = () => { save({ necessary: true, analytics, marketing }); setOpen(false); setManage(false); };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie preferences"
      className="fixed bottom-0 inset-x-0 z-[60] p-4 sm:p-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-background/95 backdrop-blur shadow-2xl p-5 sm:p-6">
        {!manage ? (
          <div className="flex flex-col gap-4">
            <div>
              <h2 className="font-display text-lg mb-1">We value your privacy</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We use cookies to improve your experience, analyse traffic, and personalise content.
                Read our <Link to="/privacy-policy" className="underline text-accent">Privacy Policy</Link>.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-end">
              <button onClick={declineAll} className="px-4 py-2 text-sm rounded-md border border-border hover:border-accent/50">Decline</button>
              <button onClick={() => setManage(true)} className="px-4 py-2 text-sm rounded-md border border-border hover:border-accent/50">Manage</button>
              <button onClick={acceptAll} className="btn-gold text-sm px-4 py-2">Accept all</button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-lg">Manage cookie preferences</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start justify-between gap-4 border border-border rounded-lg p-3">
                <div>
                  <div className="font-medium">Necessary</div>
                  <div className="text-muted-foreground text-xs">Required for the site to function. Always on.</div>
                </div>
                <input type="checkbox" checked disabled className="mt-1" />
              </li>
              <li className="flex items-start justify-between gap-4 border border-border rounded-lg p-3">
                <div>
                  <div className="font-medium">Analytics</div>
                  <div className="text-muted-foreground text-xs">Helps us understand how visitors use the site.</div>
                </div>
                <input type="checkbox" checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} className="mt-1" />
              </li>
              <li className="flex items-start justify-between gap-4 border border-border rounded-lg p-3">
                <div>
                  <div className="font-medium">Marketing</div>
                  <div className="text-muted-foreground text-xs">Used for personalised ads and remarketing.</div>
                </div>
                <input type="checkbox" checked={marketing} onChange={(e) => setMarketing(e.target.checked)} className="mt-1" />
              </li>
            </ul>
            <div className="flex flex-wrap gap-2 justify-end">
              <button onClick={() => setManage(false)} className="px-4 py-2 text-sm rounded-md border border-border hover:border-accent/50">Back</button>
              <button onClick={saveChoice} className="btn-gold text-sm px-4 py-2">Save preferences</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CookieConsent;
