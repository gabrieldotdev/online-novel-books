export default function SettingsLayout({ children, notifications, revenue }) {
  return (
    <section>
      {children}
      <div className="flex gap-3 h-[82%]">
        <div className="bg-white flex-1 p-3 flex justify-center items-center">
          {notifications}
        </div>

        <div className="bg-white flex-1 p-3 flex justify-center items-center">
          {revenue}
        </div>
      </div>
    </section>
  );
}
