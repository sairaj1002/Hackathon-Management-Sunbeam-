import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import ProfileForm from "../components/ProfileForm";

import { profile } from "../../../mock/profile";

const EditProfilePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    try {
      setLoading(true);

      /*
      await profileService.updateProfile(data);
      */

      console.log(data);

      toast.success("Profile updated successfully.");
      navigate("/profile");
    } catch (error) {
      console.error(error);

      toast.error("Unable to update profile.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Edit Profile
        </h1>

        <p className="mt-2 text-zinc-500">
          Update your profile information.
        </p>

      </div>

      <ProfileForm
        initialData={profile}
        loading={loading}
        onSubmit={handleSubmit}
      />

    </div>
  );
};

export default EditProfilePage;
