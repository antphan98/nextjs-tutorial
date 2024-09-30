import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';

// Metadata definition for the page
export const metadata: Metadata = {
  title: 'Customers',
};

// Define the Page component
export default async function Page({
  searchParams, // Expecting searchParams to be an object, not a promise
}: {
  searchParams: { query?: string; page?: string }; // Define searchParams structure
}) {
  // Safely access query and page parameters
  const query = searchParams.query ?? ''; // Default to an empty string if undefined
  const page = searchParams.page ?? '1';   // Default to '1' if undefined

  // Fetch customers based on the query parameter
  const customers = await fetchFilteredCustomers(query);

  return (
    <main>
      <CustomersTable customers={customers} />
    </main>
  );
}