import Layout from "../components/layout";

function CorporateSponsors() {
  return (
    <Layout title="Corporate Sponsors">
      <div className="donors-page">
        <h1>Corporate Donors</h1>

        <p
          style={{
            textAlign: "center",
            maxWidth: "600px",
            marginBottom: "60px",
          }}
        >
          We would like to express our sincere gratitude to all of our corporate
          donors who have been so supportive of our mission. While not an
          all-inclusive list, a sampling of some of our corporate donors is
          shown below.
        </p>
        <img
          style={{ width: "100%", alignSelf: 'flex-start' }}
          src="Santas-Volunteers-Corporate-Sponsor-Logos-04.png"
        />
      </div>
    </Layout>
  );
}

export default CorporateSponsors;
