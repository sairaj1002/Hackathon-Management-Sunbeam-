const DashboardSection = ({
  title,
  action,
  children,
}) => {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
          {title}
        </h2>

        {action && (
          <div className="shrink-0">
            {action}
          </div>
        )}
      </div>

      <div>
        {children}
      </div>
    </section>
  );
};

export default DashboardSection;