import Layout from "../components/layout";

function CorporateSponsors() {
  return (
    <Layout title="Board of Directors">
      <div className="directors-page">
        <h1>Board of Directors</h1>

        <p style={{ textAlign: "center", marginBottom: "60px" }}>
          John Churchill, <strong>President</strong>
          <br />
          Julie Westerman, <strong>Vice President</strong>
          <br />
          David Sargent, <strong>Vice President</strong>
          <br />
          Michael Foster, <strong>Treasurer</strong>
          <br />
          Maggie Erzinger Stewart, <strong>Secretary</strong>
        </p>

        <div className="four-column-directors">
          <div className="director-column">
            <p>
              Anne Badgley
              <br />
              Forrest Badgley
              <br />
              Eric Beatty
              <br />
              Rich Brendza
              <br />
              Swope Clarke
              <br />
              Dave DeLach
              <br />
              Rick Delisle
              <br />
              Robert B. Douglas
              <br />
              Tom Erdmier
              <br />
              Christian H. Erzinger
              <br />
              Henry Erzinger
              <br />
              Denise Fedewa
              <br />
              Mark Fellinger
            </p>
          </div>

          <div className="director-column">
            <p>
              Paul Fellinger
              <br />
              Eve Finzer
              <br />
              Liza Finzer
              <br />
              Alan M. Graham
              <br />
              Michael Grasso
              <br />
              <br />
              <br />
              Jenny Haljun
              <br />
              William R. Haljun
              <br />
              Jay Hines
              <br />
              Kevin Hmelyar
              <br />
              Bill Hopkins
            </p>
          </div>

          <div className="director-column">
            <p>
              Dave Knop
              <br />
              Sandy Kolkey
              <br />
              <br />
              William L. Lederer
              <br />
              Kevin R. Marschall
              <br />
              Gary Martin
              <br />
              Sara McGee
              <br />
              Paul M. McNicholas
              <br />
              Charley Porter
            </p>
          </div>

          <div className="director-column">
            <p>
              Marshall W. Reavis IV
              <br />
              Alex Stewart
              <br />
              Dave Thomas
              <br />
              Emily Ward
              <br />
              David Westerman
              <br />
              Sean Witty
              <br />
              Evan Hunter
              <br />
              Mike Purcell
              <br />
              Steven Keller
              <br />
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CorporateSponsors;
