import { GitHubCalendar } from "react-github-calendar";

function Github() {
  return (
    <section className="github-section" aria-labelledby="github-heading">
      <h2 className="project-heading" id="github-heading">
        Days I <strong>Code</strong>
      </h2>
      <div className="github-calendar-wrap">
        <GitHubCalendar
          username="Raph3rr"
          blockSize={12}
          blockMargin={4}
          colorScheme="dark"
          theme={{
            dark: ["#202a34", "#637482", "#8192a0", "#a2b1bd", "#d0d9e0"],
          }}
          fontSize={13}
        />
      </div>
    </section>
  );
}

export default Github;
