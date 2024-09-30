import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';

// Metadata definition for the page
export const metadata: Metadata = {
  title: 'Customers',
};

// Define the Page component
export default async function Page({
  searchParams, // Expecting searchParams to be a plain object
}: {
  searchParams: { query?: string; page?: string }; // Define searchParams structure
}) {
  // Log the incoming searchParams for debugging
  console.log('Incoming Search Params:', searchParams);

  // Safely access query and page parameters
  const query = searchParams.query ?? ''; // Fallback to an empty string if undefined
  const page = searchParams.page ?? '1';   // Fallback to '1' if undefined

  // Fetch customers based on the query parameter
  const customers = await fetchFilteredCustomers(query);

  return (
    <main>
      <CustomersTable customers={customers} />
    </main>
  );
}