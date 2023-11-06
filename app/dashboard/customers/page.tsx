import CustomersTable from "@/app/ui/customers/table";
import { lusitana } from "@/app/ui/fonts";
import { TableRowSkeleton } from "@/app/ui/skeletons";
import { Metadata } from "next";
import { Suspense } from "react";
export const metadata: Metadata = {
  title: "Customers",
};
export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Customers Page
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-1">
        <Suspense fallback={<TableRowSkeleton />}>
          <CustomersTable />
        </Suspense>
      </div>
    </main>
  );
}
