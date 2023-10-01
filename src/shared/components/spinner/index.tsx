export const Spinner = ({ className = "" }: { className: string }) => (
    <div className={`flex justify-center pt-8px' ${className}`}>
      <div className="w-14 h-14 rounded-full border-8 border-t-8 border-white border-t-orange-900 border-solid animate-spinner"></div>
    </div>
);