import React from "react";
import { Title, Table } from "@mantine/core";
import { AverageYieldAndAreaPerCrop } from "../utils/types";

interface Props {
  data: AverageYieldAndAreaPerCrop[];
}

const CropAverageTable: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <Title order={2} className="title--avgyield">
        Average Yield and Cultivation Area per Crop
      </Title>
      <Table
        striped
        highlightOnHover
        withTableBorder
        withColumnBorders
        id="Crop--avgYield"
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Crop</Table.Th>
            <Table.Th>Average Yield of the Crop between 1950-2020</Table.Th>
            <Table.Th>
              Average Cultivation Area of the Crop between 1950-220
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.map((item, index) => (
            <Table.Tr key={index}>
              <Table.Td>{item.crop}</Table.Td>
              <Table.Td>{item.averageYield}</Table.Td>
              <Table.Td>{item.averageArea}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
};

export default CropAverageTable;
