import { useState } from "react";

import Avatar from "../../components/ui/Avatar";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Input from "../../components/ui/Input";
import Loader from "../../components/ui/Loader";

import Modal from "../../components/shared/Modal";
import Pagination from "../../components/shared/Pagination";
import Table from "../../components/shared/Table";

const UIShowcasePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [page, setPage] = useState(1);

  const columns = [
    {
      key: "name",
      title: "Hackathon",
    },
    {
      key: "status",
      title: "Status",
      render: (row) => (
        <Badge
          variant={
            row.status === "Active"
              ? "success"
              : row.status === "Pending"
              ? "warning"
              : "secondary"
          }
        >
          {row.status}
        </Badge>
      ),
    },
    {
      key: "teams",
      title: "Teams",
    },
  ];

  const data = [
    {
      name: "CodeSprint 2026",
      status: "Active",
      teams: 42,
    },
    {
      name: "HackIndia",
      status: "Pending",
      teams: 28,
    },
    {
      name: "AI Challenge",
      status: "Completed",
      teams: 61,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
          UI Component Showcase
        </h1>

        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          A collection of reusable UI components used throughout the HackHub
          application.
        </p>
      </div>

      {/* Buttons */}

      <Card title="Buttons">
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>

          <Button variant="secondary">
            Secondary
          </Button>

          <Button variant="success">
            Success
          </Button>

          <Button variant="danger">
            Danger
          </Button>

          <Button variant="outline">
            Outline
          </Button>

          <Button variant="ghost">
            Ghost
          </Button>

          <Button loading>
            Loading
          </Button>
        </div>
      </Card>

      {/* Inputs */}

      <Card title="Inputs">
        <div className="grid gap-4 md:grid-cols-2">
          <Input
            label="Hackathon Name"
            placeholder="Enter hackathon name"
          />

          <Input
            label="Organizer"
            placeholder="CDAC Pune"
          />

          <Input
            label="Email"
            type="email"
            placeholder="john@example.com"
          />

          <Input
            label="Password"
            type="password"
            placeholder="********"
          />
        </div>
      </Card>

      {/* Badges */}

      <Card title="Badges">
        <div className="flex flex-wrap gap-3">
          <Badge variant="success">
            Active
          </Badge>

          <Badge variant="warning">
            Pending
          </Badge>

          <Badge variant="danger">
            Rejected
          </Badge>

          <Badge variant="info">
            Upcoming
          </Badge>

          <Badge>
            Completed
          </Badge>
        </div>
      </Card>

      {/* Avatars */}

      <Card title="Avatars">
        <div className="flex items-center gap-6">
          <Avatar name="John Doe" />

          <Avatar
            name="Hackathon Judge"
            size="lg"
          />

          <Avatar
            name="Administrator"
            size="xl"
          />
        </div>
      </Card>

      {/* Table */}

      <Card title="Table">
        <Table
          columns={columns}
          data={data}
        />
      </Card>

      {/* Pagination */}

      <Card title="Pagination">
        <Pagination
          currentPage={page}
          totalPages={5}
          onPageChange={setPage}
        />
      </Card>

      {/* Loader */}

      <Card title="Loader">
        <div className="flex justify-center py-6">
          <Loader />
        </div>
      </Card>

      {/* Modal */}

      <Card title="Modal">
        <Button
          onClick={() => setIsModalOpen(true)}
        >
          Open Modal
        </Button>

        <Modal
          isOpen={isModalOpen}
          title="Delete Hackathon"
          onClose={() => setIsModalOpen(false)}
          footer={
            <div className="flex justify-end gap-3">
              <Button
                variant="secondary"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </Button>

              <Button variant="danger">
                Delete
              </Button>
            </div>
          }
        >
          Are you sure you want to delete this hackathon? This action cannot be
          undone.
        </Modal>
      </Card>
    </div>
  );
};

export default UIShowcasePage;