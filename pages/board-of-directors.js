import Layout from "../components/layout";

function CorporateSponsors() {
  return (
    <Layout title="Board of Directors">
      <div className="directors-page">
        <h1>Board of Directors</h1>

        <p style={{ textAlign: "center", marginBottom: "60px" }}>
        Michael Foster, <strong>President</strong>
          <br />
          Jenny Haljun, <strong>Vice President</strong>
          <br />
          Mike Purcell, <strong>Vice President</strong>
          <br />
          Michael Foster, <strong>Treasurer</strong>
          <br />
          Emily Ward, <strong>Secretary</strong>
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
              Evan Churchill
              <br />
              John Churchill
              <br />
              Luke Churchill
              <br />
              Sydney Churchill
              <br />
              Swope Clarke
              <br />
              Emily Denhart
              <br />
              Dave DeLach 
              <br />
              Rick Delisle
            </p>
          </div>

          <div className="director-column">
            <p>
              Robert Douglas 
            <br />
            Tom Erdmier 
              <br />
              Christian Erzinger Hendry
              <br />
              Erzinger
              <br />
              Mark Fellinger 
              <br />
              Paul Fellinger
              <br />
              Eve Finzer
              <br />
              Liza Finzer
              <br />
              Erin Foster
              <br />
              Louis Garavaglia
              <br />
              Alan Graham 
              <br />
              Michael Grasso
              <br />
              Ellen Gullickson
            </p>
          </div>

          <div className="director-column">
            <p>
            William Haljun 
              <br />
              Jay Hines
              <br />
              Kevin Hmelyar
              <br />
              Bill Hopkins 
              <br />
              Dave Knop
              <br />
              Sandy Kolkey 
              <br />
              William Lederer 
              <br />
              Gary Martin
              <br />
              Cally McGee
              <br />
              Sara McGee 
              <br />
              Cory Nevins
              <br />
              Charles Porter
              <br />
              Chris Porter
            </p>
          </div>

          <div className="director-column">
            <p>
              Marshall W. Reavis IV
              <br />
              Dave Sargent
              <br />
              Jake Smith
              <br />
              Alex Stewart
              <br />
              Maggie Stewart
              <br />
              Dave Thomas 
              <br />
              Mike Tracy
              <br />
              Julie Westerman
              <br />
              David Westerman
              <br />
              Sean Witty
              <br />
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CorporateSponsors;
