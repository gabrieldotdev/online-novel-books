export function FakeLoadingVariantOne() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-xs rounded-lg p-4 shadow-lg">
        <div className="flex items-center justify-center">
          <div className="animate-pulse bg-gray-300 h-3 w-3 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
