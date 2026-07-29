import { useEffect, useState } from "react";

import Button from "../../../components/ui/Button";
import Card from "../../../components/ui/Card";
import Input from "../../../components/ui/Input";

const defaultValues = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  organization: "",
  bio: "",
};

const ProfileForm = ({
  initialData = defaultValues,
  loading = false,
  onSubmit,
}) => {
  const [formData, setFormData] = useState(defaultValues);

  useEffect(() => {
    setFormData({
      ...defaultValues,
      ...initialData,
    });
  }, [initialData]);

  const handleChange = ({ target }) => {
    setFormData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  return (
    <Card className="p-6">

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >

        <Input
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <Input
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <Input
          label="Location"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />

        <Input
          label="Organization"
          name="organization"
          value={formData.organization}
          onChange={handleChange}
        />

        <Input
          label="Bio"
          name="bio"
          value={formData.bio}
          onChange={handleChange}
        />

        <div className="flex justify-end">

          <Button
            type="submit"
            loading={loading}
            disabled={loading}
          >
            Save Changes
          </Button>

        </div>

      </form>

    </Card>
  );
};

export default ProfileForm;