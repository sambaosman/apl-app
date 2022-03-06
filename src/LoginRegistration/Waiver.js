import React from "react";
import { register } from "../LoginRegistration/LoginRegistrationFunctions";
import { PrimaryButton } from "../StyledComponents/StyledComponents";

const Waiver = ({
  formFields,
  setFormFields,
  setTeamMembers,
  setError,
  history,
}) => {
  return (
    <div className="app-container">
      <div className="app-title">
        AMATEUR ATHLETIC WAIVER AND RELEASE OF LIABILITY
      </div>
      <div className="apl-about-message">
        READ BEFORE SIGNING In consideration of being allowed to participate in
        any way in AMERICAN PREMIER LEAGUE (DBA: APL) athletic sports program,
        related events and activities, the undersigned acknowledges,
        appreciates, and agrees that:{" "}
      </div>
      <ol>
        <li>
          The risks of injury and illness (ex: communicable diseases such as
          MRSA, influenza, and COVID-19) from the activities involved in this
          program are significant, including the potential for permanent
          paralysis and death, and while particular rules, equipment, and
          personal discipline may reduce these risks, the risks of serious
          injury and illness do exist; and,
        </li>
        <li>
          I KNOWINGLY AND FREELY ASSUME ALL SUCH RISKS, both known and unknown,
          EVEN IF ARISING FROM THE NEGLIGENCE OF THE RELEASEES or others, and
          assume full responsibility for my participation; and,
        </li>
        <li>
          I willingly agree to comply with the stated and customary terms and
          conditions for participation. If, however, I observe any unusual
          significant hazard during my presence or participation, I will remove
          myself from participation and bring such to the attention of the
          nearest official immediately; and,
        </li>
        <li>
          I, for myself and on behalf of my heirs, assigns, personal
          representatives and next of kin, HEREBY RELEASE AND HOLD HARMLESS
          AMERICAN PREMIER LEAGUE (DBA: APL) their officers, officials, agents,
          and/or employees, other participants, sponsoring agencies, sponsors,
          advertisers, and if applicable, owners and lessors of premises used to
          conduct the event (“RELEASEES”), WITH RESPECT TO ANY AND ALL INJURY,
          ILLNESS, DISABILITY, DEATH, or loss or damage to person or property,
          WHETHER ARISING FROM THE NEGLIGENCE OF THE RELEASEES OR OTHERWISE, to
          the fullest extent permitted by law.
        </li>
        <li>
          I KNOWINGLY AND FREELY ASSUME ALL SUCH RESPONSIBILITY OF FINANCIAL
          PENALTIES IN THE EVENT THAT MY TEAM FORFEITS ($200 PER FORFEIT), A
          PLAYER RECEIVES A STRAIGHT RED CARD DUE TO VIOLENT, UNSPORTSMAN-LIKE
          CONDUCT ($100 PER INCIDENT). THE TEAM MANAGER IS RESPONSIBLE FOR
          PAYING ANY UNPAID GUEST FEES. APL RESERVES THE RIGHT TO PREVENT ANY
          FURTHER GAMES TO BE PLAYED BY ANY TEAM FOR REASONS INCLUDING, BUT NOT
          LIMITED TO THE AFOREMENTIONED. I HAVE READ THIS RELEASE OF LIABILITY
          AND ASSUMPTION OF RISK AGREEMENT, FULLY UNDERSTAND ITS TERMS,
          UNDERSTAND THAT I HAVE GIVEN UP SUBSTANTIAL RIGHTS BY SIGNING IT, AND
          SIGN IT FREELY AND VOLUNTARILY WITHOUT ANY INDUCEMENT.
        </li>
      </ol>
      <PrimaryButton
        onClick={() =>
          register(formFields, setFormFields, setTeamMembers, setError, history)
        }
      >
        Acknowledge
      </PrimaryButton>
    </div>
  );
};

export default Waiver;
