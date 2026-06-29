import { PageHeader } from "@/app/components/dashboard/page-header";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
export default function SettingsPage() {
  return (
    <div>
      <PageHeader
        title="Settings"
        description="Manage business profile and application preferences."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Business Information</h2>

          <div className="mt-6 space-y-4">
            <Input
              label="Business name"
              placeholder="Business name"
              defaultValue="Foxbags"
            />

            <Input
              label="Business email"
              placeholder="Business email"
              defaultValue="contact@foxbags.com"
            />

            <Input
              label="Phone number"
              placeholder="Phone number"
              defaultValue="+1 (416) 555-0198"
            />

            <Button>Save Changes</Button>
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold">Preferences</h2>

          <div className="mt-6 space-y-4">
            <label className="flex items-center justify-between rounded-xl border p-4">
              <span>Email notifications</span>
              <input type="checkbox" defaultChecked />
            </label>

            <label className="flex items-center justify-between rounded-xl border p-4">
              <span>Stripe payments</span>
              <input type="checkbox" defaultChecked />
            </label>

            <label className="flex items-center justify-between rounded-xl border p-4">
              <span>Production alerts</span>
              <input type="checkbox" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
