import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import TeamCard from "./TeamCard";
import H2HStatisticsInfo from "./H2HStatisticsInfo";

const Head2Head = () => {
  const StyledImg = styled.img`
    width: 300px;
    height: 300px;
    border: 1px solid #ff6700;
  `;

  const [state, setState] = useState({
    head2head: {
      homeTeamId: 1,
      awayTeamId: 2,
    },
  });

  return (
    // <Container>
    //   <div
    //     className="d-block border-top border-dark"
    //     style={{ backgroundColor: "#ede9e9" }}
    //   >
    //     <div className="row clearfix">
    //       <div className="col container float-left position-relative">
    //         <h4>
    //           <a
    //             asp-controller="Teams"
    //             asp-action="ById"
    //             asp-route-teamId="@Model.TeamsDetails.HomeTeamId"
    //           >
    //             Man City
    //           </a>
    //         </h4>
    //       </div>
    //       <div className="col container float-right position-relative">
    //         <h4>
    //           <a
    //             className="float-right"
    //             asp-action="ById"
    //             asp-route-teamId="@Model.TeamsDetails.AwayTeamId"
    //           >
    //             Liverpool
    //           </a>
    //         </h4>
    //       </div>
    //     </div>
    //     <div className="row clearfix">
    //       <div className="col container float-left">
    //         <div>
    //           <StyledImg
    //             src="https://logos-world.net/wp-content/uploads/2020/06/Liverpool-emblem.png"
    //             alt="..."
    //             className="img-thumbnail rounded border-success"
    //           />
    //         </div>
    //       </div>
    //       <div className="col container">
    //         <div className="">
    //           <table>
    //             <thead></thead>
    //             <tbody>
    //               <tr>
    //                 <td>
    //                   <p>
    //                     <strong>Total games between two teams:</strong>{" "}
    //                     @Model.TotalGamesBetweenTwoTeams
    //                   </p>
    //                 </td>
    //               </tr>
    //               <tr>
    //                 <td>
    //                   <p>
    //                     <strong>@Model.TeamsDetails.HomeTeamName Wins:</strong>{" "}
    //                     @Model.HomeTeamWins Times
    //                   </p>
    //                 </td>
    //               </tr>
    //               <tr>
    //                 <td>
    //                   <p>
    //                     <strong>@Model.TeamsDetails.AwayTeamName Wins:</strong>{" "}
    //                     @Model.AwayTeamWins Times
    //                   </p>
    //                 </td>
    //               </tr>
    //               <tr>
    //                 <td>
    //                   <p>
    //                     <strong>Games ended with draw:</strong> @Model.Draws
    //                     Times
    //                   </p>
    //                 </td>
    //               </tr>
    //               <tr>
    //                 <td>
    //                   <p>
    //                     <strong>Total goals scored:</strong>{" "}
    //                     @Model.TotalGoalsScored in
    //                     @Model.TotalGamesBetweenTwoTeams Games
    //                   </p>
    //                 </td>
    //               </tr>
    //             </tbody>
    //           </table>
    //         </div>
    //       </div>
    //       <div className="col container float-right">
    //         <div>
    //           <StyledImg
    //             src="https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/Manchester_City_FC_badge.svg/1200px-Manchester_City_FC_badge.svg.png"
    //             alt=""
    //             className="img-thumbnail float-right"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Container>
    <Container>
      <div
        className="border-top border-dark"
        style={{
          backgroundColor: "#ede9e9",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <TeamCard teamId={state.head2head.homeTeamId} />
        <H2HStatisticsInfo teams={state.head2head} />
        <TeamCard teamId={state.head2head.awayTeamId} />
      </div>
    </Container>
  );
};

export default Head2Head;
