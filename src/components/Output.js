import React from "react";

const Output = ({ data }) => {
  return (
    <div id="output" style={{ marginTop: "20px", fontFamily: "Verdana, sans-serif", background: "#f9f9f9" }}>
      <img
        src="https://i.etsystatic.com/48636862/r/il/2771ed/5677001286/il_fullxfull.5677001286_3co1.jpg"
        alt="Prediction"
        style={{
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "170px",
          height: "auto",
          display: "block",
          margin: "15px auto",
        }}
      />
      <table>
        <tbody>
          <tr>
            <td><strong>Name</strong></td>
            <td>{data.name}</td>
          </tr>
          <tr>
            <td><strong>Date of Birth</strong></td>
            <td>{data.dateofbirth}</td>
          </tr>
          <tr>
            <td><strong>Location</strong></td>
            <td>{data.place}</td>
          </tr>
          <tr>
            <td><strong>Mulyank</strong></td>
            <td>{data.mulyank}</td>
          </tr>
          <tr>
            <td><strong>Ruled By</strong></td>
            <td>{data.RuledBy}</td>
          </tr>

          {/* Section Headers */}
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <td colSpan="2" style={{ textAlign: "center", fontWeight: "bold" }}>
              Positive Characteristics
            </td>
          </tr>
          <tr>
            <td><strong>Trait 01</strong></td>
            <td>{data.PositiveTraits1}</td>
          </tr>
          <tr>
            <td><strong>Trait 02</strong></td>
            <td>{data.PositiveTraits2}</td>
          </tr>
          <tr>
            <td><strong>Trait 03</strong></td>
            <td>{data.PositiveTraits3}</td>
          </tr>
          <tr>
            <td><strong>Trait 04</strong></td>
            <td>{data.PositiveTraits4}</td>
          </tr>

          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <td colSpan="2" style={{ textAlign: "center", fontWeight: "bold" }}>
              Negative Characteristics
            </td>
          </tr>
          <tr>
            <td><strong>Trait 01</strong></td>
            <td>{data.negativeTraits1}</td>
          </tr>
          <tr>
            <td><strong>Trait 02</strong></td>
            <td>{data.negativeTraits2}</td>
          </tr>

          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <td colSpan="2" style={{ textAlign: "center", fontWeight: "bold" }}>
              More Details
            </td>
          </tr>
          <tr>
            <td><strong>Nature</strong></td>
            <td>{data.nature}</td>
          </tr>
          <tr>
            <td><strong>Best Matches</strong></td>
            <td>{data.BestMatches}</td>
          </tr>
          <tr>
            <td><strong>Career Choices</strong></td>
            <td>{data.CareerChoices}</td>
          </tr>
          <tr>
            <td><strong>Challenging Matches</strong></td>
            <td>{data.ChallengingMatches}</td>
          </tr>
          <tr>
            <td><strong>Astrologer</strong></td>
            <td>{data.astrologer}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Output;
