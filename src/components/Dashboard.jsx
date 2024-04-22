import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import Counter from "./Counter";
import {
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const Dashboard = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));

  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "User Profile Trend",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
      },
    ],
  };

  return (
    <div className="mt-28 px-5">
      <div>
        <Counter height={""} />
      </div>
      <div className="w-full md:w-4/5 mx-auto my-5">
        <Heading fontSize={"3xl"}>User Table</Heading>
      </div>
      <TableContainer className="border rounded-lg w-full lg:w-4/5 mx-auto mb-10">
        <Table size="md">
          <Thead>
            <Tr>
              <Th sNumeric>userId</Th>
              <Th>name</Th>
              <Th>email</Th>
              <Th>address</Th>
              <Th isNumeric>phone</Th>
            </Tr>
          </Thead>
          <Tbody>
            {userData?.map((data) => (
              <Tr>
                <Td>{data.userId}</Td>
                <Td>{data.name}</Td>
                <Td>{data.email}</Td>
                <Td>{data.address}</Td>
                <Td isNumeric>+91{data.phone}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <div className="w-full lg:w-4/5 mx-auto">
        <Heading fontSize={"3xl"}>User Profile Trend</Heading>
        <div className="w-full md:w-4/5 mx-auto">
          {userData && (
            <div>
              <Line data={chartData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
