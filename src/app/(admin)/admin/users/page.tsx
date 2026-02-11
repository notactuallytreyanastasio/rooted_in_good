import type { UserRole } from "@/types";

interface UserRow {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  joinDate: string;
  purchases: number;
}

const sampleUsers: UserRow[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    email: "sarah.m@email.com",
    role: "USER",
    joinDate: "2025-11-15",
    purchases: 2,
  },
  {
    id: "2",
    name: "Marcus Thompson",
    email: "marcus.t@email.com",
    role: "USER",
    joinDate: "2025-12-01",
    purchases: 1,
  },
  {
    id: "3",
    name: "Jennifer Larson",
    email: "jen.larson@email.com",
    role: "USER",
    joinDate: "2026-01-08",
    purchases: 3,
  },
  {
    id: "4",
    name: "David Chen",
    email: "d.chen@email.com",
    role: "USER",
    joinDate: "2026-01-20",
    purchases: 1,
  },
  {
    id: "5",
    name: "Emily Rodriguez",
    email: "emily.r@email.com",
    role: "ADMIN",
    joinDate: "2025-10-01",
    purchases: 0,
  },
  {
    id: "6",
    name: "James Wilson",
    email: "j.wilson@email.com",
    role: "USER",
    joinDate: "2026-02-02",
    purchases: 1,
  },
  {
    id: "7",
    name: "Amanda Foster",
    email: "amanda.f@email.com",
    role: "USER",
    joinDate: "2025-12-18",
    purchases: 2,
  },
  {
    id: "8",
    name: "Robert Kim",
    email: "r.kim@email.com",
    role: "USER",
    joinDate: "2026-01-30",
    purchases: 1,
  },
];

function formatJoinDate(dateStr: string): string {
  const d = new Date(dateStr + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function UsersPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-text">Users</h2>
        <p className="text-text-muted text-sm mt-1">
          View and manage registered users
        </p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-border shadow-sm">
          <p className="text-2xl font-bold text-text">
            {sampleUsers.length}
          </p>
          <p className="text-sm text-text-muted">Total Users</p>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-border shadow-sm">
          <p className="text-2xl font-bold text-text">
            {sampleUsers.filter((u) => u.role === "ADMIN").length}
          </p>
          <p className="text-sm text-text-muted">Admins</p>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-border shadow-sm">
          <p className="text-2xl font-bold text-text">
            {sampleUsers.reduce((sum, u) => sum + u.purchases, 0)}
          </p>
          <p className="text-sm text-text-muted">Total Purchases</p>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wide px-6 py-4">
                  Name
                </th>
                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wide px-6 py-4">
                  Email
                </th>
                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wide px-6 py-4">
                  Role
                </th>
                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wide px-6 py-4">
                  Joined
                </th>
                <th className="text-left text-xs font-semibold text-text-muted uppercase tracking-wide px-6 py-4">
                  Purchases
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {sampleUsers.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-soft-gray/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-listen-light flex items-center justify-center flex-shrink-0">
                        <span className="text-listen-dark font-semibold text-xs">
                          {user.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-text">
                        {user.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-text-muted">
                      {user.email}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={
                        user.role === "ADMIN"
                          ? "text-xs font-semibold bg-quality-light text-quality-dark px-2.5 py-1 rounded-full"
                          : "text-xs font-semibold bg-soft-gray text-text-muted px-2.5 py-1 rounded-full"
                      }
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-text-muted">
                      {formatJoinDate(user.joinDate)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-text font-medium">
                      {user.purchases}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
