import React from "react";
import { Title, Table } from "@mantine/core";
import { MaxMinProductionPerYear } from "../utils/types";

interface Props {
  data: MaxMinProductionPerYear[];
}

const MaxMinProductionTable: React.FC<Props> = ({ data }) => {
  return (
    <div>
      <Title order={2} className="title--maxmincrop">
        Maximum and Minimum Crop Production per Year
      </Title>
      <Table
        striped
        highlightOnHover
        withTableBorder
        withColumnBorders
        id="Crop--maxProd--minProd"
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Year</Table.Th>
            <Table.Th>Crop with Maximum Production in that Year</Table.Th>
            <Table.Th>Crop with Minimum Production in that Year</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.map((item, index) => (
            <Table.Tr key={index}>
              <Table.Td>{item.year}</Table.Td>
              <Table.Td>{item.maxProduction}</Table.Td>
              <Table.Td>{item.minProduction}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
};

export default MaxMinProductionTable;
