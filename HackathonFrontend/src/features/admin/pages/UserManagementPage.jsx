import Card from "../../../components/ui/Card";
import Button from "../../../components/ui/Button";

const UserManagementPage = () => {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            User Management
          </h1>

          <p className="mt-1 text-gray-600 dark:text-gray-400">
            Manage users, roles and account status.
          </p>
        </div>

        <Button>
          Add User
        </Button>
      </div>

      {/* Content */}
      <Card>
        <div className="py-16 text-center">
          <h2 className="text-xl font-semibold">
            User List
          </h2>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            User management features will be available after backend integration.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default UserManagementPage;