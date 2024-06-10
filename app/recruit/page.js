"use client";
import { useContext, useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card.js";
import { FloatingNav } from "../components/ui/floating-navbar.js";
import { navItems } from "../../data/navItems.js";
import { UserContext } from "../components/UserContext.js";

export default function Recruit() {
  const { user } = useContext(UserContext);
  const [candidatesData, setCandidatesData] = useState([]);
  const [searchLocationQuery, setSearchLocationQuery] = useState("");
  const [searchJobRoleQuery, setSearchJobRoleQuery] = useState("");
  const [isShortListing, setIsShortListing] = useState(false);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/get_candidates")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCandidatesData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const searchCandidates = () => {
    if (searchJobRoleQuery || searchLocationQuery || shouldGetSortList) {
      let params = new URLSearchParams();
      if (searchJobRoleQuery) params.append("job_role", searchJobRoleQuery);
      if (searchLocationQuery) params.append("location", searchLocationQuery);

      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/search_candidates?${params}`)
        .then((res) => res.json())
        .then((data) => setCandidatesData(data));
    } else {
      fetch(process.env.NEXT_PUBLIC_BACKEND_URL + "/get_candidates")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCandidatesData(data);
        })
        .catch((err) => console.log(err));
    }
  };

  const getShortListedCandidates = () => {};

  const shortListCandidate = async (candidate_id) => {
    setIsShortListing(true);

    if (user.loggedIn) {
      await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/get_short_list?candidate_id=${candidate_id}&user_id=${user.id}`,
        {
          credentials: "include",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data !== "Not authorized" && data.message === "Update successful") {
            setCandidatesData((prevState) =>
              prevState.map((item) =>
                item.candidate_id === candidate_id
                  ? { ...item, short_listed_by: [item.short_listed_by, user.id] }
                  : item
              )
            );
          } else {
            alert("please login");
            window.location.href = "/login";
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("please login");
      window.location.href = "/login";
    }

    setIsShortListing(false);
  };

  const CandidateCard = ({ name, email, job_role, location, candidate_id, short_listed_by }) => {
    return (
      <CardContainer className="w-full">
        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border  ">
          <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
            {name}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {email}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {job_role}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            {location}
          </CardItem>
          <div className="flex justify-between items-center mt-10">
            <CardItem
              onClick={() => {
                shortListCandidate(candidate_id);
              }}
              disabled={isShortListing || short_listed_by?.includes(user.id)}
              translateZ={20}
              as="button"
              className={`${
                isShortListing || short_listed_by?.includes(user.id) ? "bg-[#ffffff80]" : "bg-white"
              } px-4 py-2 rounded-xl text-black text-xs font-bold`}
            >
              Short List
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    );
  };

  return (
    <main className="mx-4">
      <FloatingNav navItems={navItems} />

      <div className="max-w-7xl mx-auto">
        <h1 className="mt-10 sm:mt-20 mb-6 text-center sm:text-xl dark:text-white text-black text-3xl font-medium">
          Find your candidate
        </h1>

        <div className="flex flex-col items-center w-full">
          <div className="flex md:flex-row flex-col gap-6 justify-center w-full">
            <div class="grid w-full md:max-w-sm items-center gap-1.5">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="location"
              >
                Location
              </label>
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="location"
                placeholder="Location"
                type="text"
                onChange={(e) => setSearchLocationQuery(e.target.value)}
              />
            </div>
            <div class="grid w-full md:max-w-sm items-center gap-1.5">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="skill"
              >
                Job Role
              </label>
              <input
                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="skill"
                placeholder="skill"
                type="text"
                onChange={(e) => setSearchJobRoleQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center md:mt-6">
              <button
                class="bg-[rgb(27,29,30)] px-6 py-3 rounded-lg w-full"
                onClick={searchCandidates}
                type="submit"
              >
                Search
              </button>
            </div>
          </div>

          <div className="flex items-center md:w-auto w-full mt-6">
            <button
              class="bg-[rgb(27,29,30)] px-6 py-3 rounded-lg w-full"
              onClick={getShortListedCandidates}
              type="submit"
            >
              Get Sort Listed Candidates
            </button>
          </div>
        </div>

        <div className="my-14">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-left lg:mb-6 mb-3">
            Candidates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
            {candidatesData.map((candidate) => (
              <CandidateCard {...candidate} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
