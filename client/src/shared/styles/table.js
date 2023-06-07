import styled from "styled-components";

const Header = styled.thead`
  th {
    padding: 5px 10px;
    top: 0;
    left: 0;
    position: sticky;
    z-index: 500;
    background-color: var(--secondary);

    text-align: start;
    color: white;
  }
`;

const Body = styled.tbody`
  tr:nth-child(even) {
    background-color: var(--cor-fundo);
  }

  td {
    padding: 5px 10px;
  }
`;

const Footer = styled.tfoot`
  td {
    padding: 5px 10px;
    position: sticky;
    bottom: 0;
    left: 0;
    z-index: 500;

    background-color: lightgray;

    text-align: start;
    color: var(--secondary);
    font-weight: 700;
  }
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0;
`;

Table.Header = Header;
Table.Body = Body;
Table.Footer = Footer;

export { Table };
