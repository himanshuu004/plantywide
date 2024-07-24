import React from "react";
import VCards from "./VCard";

const Founders = () => {
  return (
    <div className="w-full max-w-[960px] flex flex-col justify-start items-start py-20 gap-8">
      <div className="w-full flex justify-start items-center text-5xl font-medium px-4">
        Meet Our Team
      </div>
      <div className="w-full flex justify-start items-start gap-4">
        <VCards
          bgcolor="444444"
          title="Our Founders"
          description=" The visionary leaders who started it all with a commitment to a greener future."
          url={"pen"}
        />
        <VCards
          bgcolor="444444"
          title="Program Managers"
          description="The dedicated individuals who oversee our tree planting initiatives and community outreach."
          url={"msg"}
        />
        <VCards
          bgcolor="444444"
          title="Volunteer Coordinators"
          description="The enthusiastic team members who engage and empower our network of volunteers."
          url={"handshake"}
        />
      </div>
    </div>
  );
};

export default Founders;
