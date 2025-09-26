import Link from "next/link";
import { AlertTriangle, Building } from "lucide-react";

// Style the icon using Tailwind CSS classes

import CardList from "@/components/CardList";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { latestTransactions } from "@/lib/data";
import {
  Badge,
  BadgeCheck,
  Candy,
  Citrus,
  Shield,
  Settings,
  ArrowLeft,
  Mail,
  Phone,
  Calendar,
  MapPin,
} from "lucide-react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/EditUser";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import AppLineChart from "@/components/AppLineChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const UserPage = ({ params }: { params: { username: string } }) => {
  // In a real app, you'd fetch user data based on params.username
  const userData = {
    fullname: "John Doe",
    username: params.username,
    email: "john.doe@gmail.com",
    phone: "+1 234 567 890",
    role: "Admin",
    joinDate: "2025.01.01",
    address: "123 Main St, San Francisco, CA",
    city: "San Francisco",
    profileCompletion: 85,
    avatar: "https://github.com/shadcn.png",
    bio: "Experienced software engineer with a passion for building scalable web applications and leading development teams. Always eager to learn new technologies and contribute to open-source projects.",
    badges: ["verified", "admin", "awarded", "popular"],
    stats: {
      projects: 12,
      contributions: 147,
      followers: 89,
    },
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/users">Users</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{params.username}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header with back button */}
      <div className="flex items-center gap-4">
        <Link href="/users">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold">{userData.fullname}</h1>
          <p className="text-muted-foreground">@{userData.username}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="xl:col-span-1 space-y-6">
          {/* User Profile Card */}
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center space-y-4">
                <Avatar className="size-20">
                  <AvatarImage src={userData.avatar} alt={userData.fullname} />
                  <AvatarFallback className="text-lg">
                    {userData.fullname
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-xl font-semibold">{userData.fullname}</h2>
                  <p className="text-muted-foreground">@{userData.username}</p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {userData.bio}
                </p>
              </div>
            </CardContent>
          </Card>
          {/* User Badges */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <CardTitle>Badges</CardTitle>
              <div className="flex items-center gap-2">
                <Link href={`/users/${params.username}/settings`}>
                  <Button variant="outline" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </Link>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button size="sm">Edit User</Button>
                  </SheetTrigger>
                  <EditUser />
                </Sheet>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <HoverCard>
                  <HoverCardTrigger>
                    <div className="flex items-center justify-center size-12 rounded-full bg-blue-500/10 border border-blue-500/20">
                      <BadgeCheck className="h-6 w-6 text-blue-500" />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <div>
                      <h4 className="font-semibold mb-1">Verified User</h4>
                      <p className="text-sm text-muted-foreground">
                        This user has been verified by the admin.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>

                <HoverCard>
                  <HoverCardTrigger>
                    <div className="flex items-center justify-center size-12 rounded-full bg-green-500/10 border border-green-500/20">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <div>
                      <h4 className="font-semibold mb-1">Admin</h4>
                      <p className="text-sm text-muted-foreground">
                        Admin users have access to all features and can manage
                        users.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>

                <HoverCard>
                  <HoverCardTrigger>
                    <div className="flex items-center justify-center size-12 rounded-full bg-yellow-500/10 border border-yellow-500/20">
                      <Candy className="h-6 w-6 text-yellow-600" />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <div>
                      <h4 className="font-semibold mb-1">Awarded</h4>
                      <p className="text-sm text-muted-foreground">
                        This user has been awarded for their contributions.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>

                <HoverCard>
                  <HoverCardTrigger>
                    <div className="flex items-center justify-center size-12 rounded-full bg-orange-500/10 border border-orange-500/20">
                      <Citrus className="h-6 w-6 text-orange-600" />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <div>
                      <h4 className="font-semibold mb-1">Popular</h4>
                      <p className="text-sm text-muted-foreground">
                        This user is popular in the community.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <div>
            <CardList title="Recent Transactions" items={latestTransactions} />
          </div>
        </div>

        {/* Right Column */}
        <div className="xl:col-span-2 space-y-6">
          {/* User Information */}
          <Card>
            <CardHeader>
              <CardTitle>User Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Profile Completion */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">
                    Profile Completion
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {userData.profileCompletion}%
                  </span>
                </div>
                <Progress value={userData.profileCompletion} className="h-2" />
              </div>

              <Separator />

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">
                        {userData.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">
                        {userData.phone}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">
                        {userData.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">City</p>
                      <p className="text-sm text-muted-foreground">
                        {userData.city}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />
            </CardContent>
          </Card>

          {/* Activity Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Activity Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <AppLineChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
