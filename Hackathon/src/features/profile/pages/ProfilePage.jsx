import { useNavigate } from "react-router-dom";
import {
  Mail,
  Phone,
  User,
  MapPin,
  Briefcase,
  Pencil,
} from "lucide-react";

import Avatar from "../../../components/ui/Avatar";
import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Badge from "../../../components/ui/Badge";

import { profile } from "../../../mock/profile";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex items-center justify-between">

        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
          My Profile
        </h1>

        <Button
          onClick={() => navigate("/profile/edit")}
        >
          <Pencil size={16} />
          Edit Profile
        </Button>

      </div>

      {/* Profile Card */}

      <Card className="p-6">

        <div className="flex flex-col items-center gap-6 md:flex-row">

          <Avatar
            name={profile.fullName}
            size="xl"
          />

          <div className="space-y-2">

            <h2 className="text-2xl font-semibold">
              {profile.fullName}
            </h2>

            <Badge variant="info">
              {profile.role}
            </Badge>

            <p className="text-zinc-500">
              {profile.bio}
            </p>

          </div>

        </div>

      </Card>

      {/* Details */}

      <Card className="p-6">

        <div className="grid gap-6 md:grid-cols-2">

          <div className="flex items-center gap-3">
            <Mail size={18} />
            {profile.email}
          </div>

          <div className="flex items-center gap-3">
            <Phone size={18} />
            {profile.phone}
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={18} />
            {profile.location}
          </div>

          <div className="flex items-center gap-3">
            <Briefcase size={18} />
            {profile.organization}
          </div>

          <div className="flex items-center gap-3">
            <User size={18} />
            {profile.username}
          </div>

        </div>

      </Card>

    </div>
  );
};

export default ProfilePage;