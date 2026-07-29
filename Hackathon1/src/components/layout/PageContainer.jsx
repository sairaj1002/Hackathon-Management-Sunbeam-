const PageContainer = ({ children, collapsed }) => {
  return (
    <main
      className={`
        flex-1
        mt-20
        transition-all
        duration-300
        ${collapsed ? "lg:ml-20" : "lg:ml-64"}
      `}
    >
      <div
        className="
          min-h-[calc(100vh-80px)]
          bg-gray-100
          dark:bg-gray-900
          transition-colors
          duration-300
          p-6
        "
      >
        {children}
      </div>
    </main>
  );
};

export default PageContainer;