
import{ useEffect, useRef } from "react";
import TopNavbar from "./TopNavbar";

const data = [
  {
    id: 1,
    job: "Launch social media campaign for product",
    submitted: "15-11-2024",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "www.aishapatel.com",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    due: "20-11-2024",
    value: "6,200,000 ₹",
  },
  {
    id: 2,
    job: "Update press kit for company redesign",
    submitted: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhan.com",
    assigned: "Tejas Pandey",
    priority: "High",
    due: "30-10-2024",
    value: "3,500,000 ₹",
  },
  {
    id: 3,
    job: "Finalize user testing feedback for app",
    submitted: "05-12-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "www.markjohnson.com",
    assigned: "Rachel Lee",
    priority: "Medium",
    due: "10-12-2024",
    value: "4,750,000 ₹",
  },
  {
    id: 4,
    job: "Design new features for the website",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreen.com",
    assigned: "Tom Wright",
    priority: "Low",
    due: "15-01-2025",
    value: "5,900,000 ₹",
  },
  {
    id: 5,
    job: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabrown.com",
    assigned: "Kevin Smith",
    priority: "Low",
    due: "30-01-2025",
    value: "2,800,000 ₹",
  },
];

const getStatusBadge = (status: string) => {
  const base = "px-2 py-1 rounded-full text-xs font-medium";
  switch (status) {
    case "In-process":
      return <span className={`${base} bg-yellow-100 text-yellow-800`}>{status}</span>;
    case "Need to start":
      return <span className={`${base} bg-blue-100 text-blue-800`}>{status}</span>;
    case "Complete":
      return <span className={`${base} bg-green-100 text-green-800`}>{status}</span>;
    case "Blocked":
      return <span className={`${base} bg-red-100 text-red-800`}>{status}</span>;
    default:
      return <span className={`${base} bg-gray-100 text-gray-800`}>{status}</span>;
  }
};

const Spreadsheet = () => {
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "auto" });
  }, []);

  return (
    <div className="flex flex-col h-screen w-full overflow-hidden">
      <TopNavbar />
      <div className="flex-1 overflow-auto p-4">
        <table className="min-w-full text-sm bg-white shadow">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Job Request</th>
              <th className="px-4 py-2 text-left">Submitted</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Submitter</th>
              <th className="px-4 py-2 text-left">URL</th>
              <th className="px-4 py-2 text-left">Assigned</th>
              <th className="px-4 py-2 text-left">Priority</th>
              <th className="px-4 py-2 text-left">Due Date</th>
              <th className="px-4 py-2 text-left">Est. Value</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="even:bg-gray-50">
                <td className="px-4 py-2 text-center">{item.id}</td>
                <td className="px-4 py-2">{item.job}</td>
                <td className="px-4 py-2 text-center">{item.submitted}</td>
                <td className="px-4 py-2 text-center">{getStatusBadge(item.status)}</td>
                <td className="px-4 py-2">{item.submitter}</td>
                <td className="px-4 py-2 text-blue-600 underline cursor-pointer">{item.url}</td>
                <td className="px-4 py-2">{item.assigned}</td>
                <td className="px-4 py-2 text-center">{item.priority}</td>
                <td className="px-4 py-2 text-center">{item.due}</td>
                <td className="px-4 py-2 text-right">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div ref={bottomRef} />
      </div>
      <div className="bg-white border-t p-3 flex items-center justify-start gap-6 text-sm font-medium">
        <button className="px-3 py-1 text-green-700 border-b-2 border-green-600">All Orders</button>
        <button className="px-3 py-1 text-gray-600 hover:text-black">Pending</button>
        <button className="px-3 py-1 text-gray-600 hover:text-black">Reviewed</button>
        <button className="px-3 py-1 text-gray-600 hover:text-black">Arrived</button>
        <button className="px-3 py-1 text-gray-600 hover:text-black">+</button>
      </div>
    </div>
  );
};

export default Spreadsheet;










