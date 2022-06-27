import { Col } from "react-bootstrap";

export default function Search({ search, searchInput, handleSearch }) {
  return (
    <Col md={{ span: 3 }}>
      <input
        style={{ borderRadius: "10px", textAlign: "center" }}
        type="text"
        placeholder="Find Character"
        value={search}
        ref={searchInput}
        onChange={handleSearch}
      />
    </Col>
  );
}
