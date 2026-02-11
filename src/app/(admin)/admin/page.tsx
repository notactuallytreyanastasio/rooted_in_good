import Link from "next/link";
import {
  Users,
  ShoppingBag,
  Target,
  PenSquare,
  ArrowUpRight,
  Calendar,
  Share2,
} from "lucide-react";

const stats = [
  {
    label: "Total Users",
    value: "1,247",
    change: "+12%",
    icon: Users,
    color: "touch",
  },
  {
    label: "Total Purchases",
    value: "438",
    change: "+8%",
    icon: ShoppingBag,
    color: "listen",
  },
  {
    label: "Active Campaigns",
    value: "3",
    change: "",
    icon: Target,
    color: "quality",
  },
  {
    label: "Scheduled Posts",
    value: "12",
    change: "",
    icon: PenSquare,
    color: "touch",
  },
];

const recentActivity = [
  {
    action: "New user registered",
    detail: "sarah.m@email.com",
    time: "2 minutes ago",
  },
  {
    action: "Post published",
    detail: "Instagram: 20-Second Hug Challenge",
    time: "1 hour ago",
  },
  {
    action: "Book purchased",
    detail: "The Rooted in Good Method by Marcus T.",
    time: "3 hours ago",
  },
  {
    action: "Campaign started",
    detail: "February Connection Challenge",
    time: "1 day ago",
  },
  {
    action: "Shareable content downloaded",
    detail: "Presence Over Perfection quote card (47 downloads)",
    time: "1 day ago",
  },
];

const quickLinks = [
  {
    label: "Create New Post",
    href: "/admin/content",
    icon: PenSquare,
    color: "touch",
  },
  {
    label: "View Calendar",
    href: "/admin/calendar",
    icon: Calendar,
    color: "listen",
  },
  {
    label: "Manage Campaigns",
    href: "/admin/campaigns",
    icon: Target,
    color: "quality",
  },
  {
    label: "Shareable Content",
    href: "/admin/shareable",
    icon: Share2,
    color: "touch",
  },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white rounded-2xl p-6 border border-border shadow-sm"
          >
            <div className="flex items-start justify-between mb-4">
              <div
                className={`w-10 h-10 bg-${stat.color}-light rounded-lg flex items-center justify-center`}
              >
                <stat.icon className={`text-${stat.color}-dark`} size={20} />
              </div>
              {stat.change && (
                <span className="text-xs font-medium text-touch-dark bg-touch-light px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              )}
            </div>
            <p className="text-3xl font-bold text-text">{stat.value}</p>
            <p className="text-sm text-text-muted mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-border shadow-sm">
          <div className="p-6 border-b border-border">
            <h2 className="text-lg font-semibold text-text">
              Recent Activity
            </h2>
          </div>
          <div className="divide-y divide-border">
            {recentActivity.map((activity, i) => (
              <div key={i} className="px-6 py-4 flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-touch mt-2 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-text">
                    {activity.action}
                  </p>
                  <p className="text-sm text-text-muted truncate">
                    {activity.detail}
                  </p>
                </div>
                <span className="text-xs text-text-muted whitespace-nowrap">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-2xl border border-border shadow-sm">
          <div className="p-6 border-b border-border">
            <h2 className="text-lg font-semibold text-text">Quick Actions</h2>
          </div>
          <div className="p-4 space-y-2">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-soft-gray transition-colors group"
              >
                <div
                  className={`w-10 h-10 bg-${link.color}-light rounded-lg flex items-center justify-center`}
                >
                  <link.icon
                    className={`text-${link.color}-dark`}
                    size={18}
                  />
                </div>
                <span className="text-sm font-medium text-text flex-1">
                  {link.label}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-text-muted group-hover:text-text transition-colors"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
