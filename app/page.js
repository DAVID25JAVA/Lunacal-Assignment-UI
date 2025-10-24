import WidgetsContainer from "./components/Rightcolumns/WidgetsContainer";

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      <div className="container mx-auto px-6 lg:px-12">
       
        <div className="min-h-[80vh] flex flex-col md:flex-row md:items-start md:justify-center pt-12">
          {/* LEFT  */}
          <div className="hidden md:block md:w-1/2 lg:w-1/2"></div>

          {/* RIGHT */}
          <div className="w-full md:w-1/2 lg:w-1/2 flex justify-center">
            <div className="w-full max-w-[520px]">
              <WidgetsContainer />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
