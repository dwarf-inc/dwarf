import React from "react";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const HealthCenter = () => {
  return (
    <div>
      <div className="display">
        <div className="container">
          <div className="inner-display">
            <h1 className="text-black">Health Center</h1>
            <ol className="head-list">
              <a href="#intro">
                <li>What are PHC ?</li>
              </a>
              <a href="#Overview">
                <li>Overview</li>
              </a>
              <a href="#Moving_toward_PHC">
                <li>Moving Toward PHC </li>
              </a>
              <a href="#health_promotions">
                <li>What are health Promotions</li>
              </a>
            </ol>
          </div>
        </div>
      </div>

      <div className="content-wrapper" id="intro">
        <section>
          <h1>What are PHC ?</h1>

          <ScrollAnimation animateIn="fadeIn">
            <p>
              PHC “Primary health center, Primary health care” is an overall
              approach which encompasses the three aspects of: multisectoral
              policy and action to address the broader determinants of health;
              empowering individuals, families and communities; and meeting
              people’s essential health needs throughout their lives. “Primary
              care” is a subset of PHC and refers to essential, first-contact
              care provided in a community setting.
            </p>
          </ScrollAnimation>
        </section>
      </div>

      <div className="content-image">
        <img
          src={require("../../images/products/health1.jpeg")}
          alt="Achieve"
        />
      </div>

      <div className="content-wrapper" id="Overview">
        <section>
          <h1>Overview </h1>

          <ScrollAnimation animateIn="fadeIn">
            <p>
              The world has committed to making health for all a reality.
              Primary health care is one of the best tools we have for achieving
              that goal. Through the Declaration of Astana, countries have
              reaffirmed the importance of PHC. We risk, however, that global
              consensus becoming nothing more than a pipe dream unless countries
              can turn the four commitments into action on the ground.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn">
            <p>
              In recent decades, PHC has been neglected in many countries in
              favor of a disease-specific approach. This is often due to a
              combination of lack of political will, under investment, and
              common misperceptions of the role and benefits of PHC. There are a
              number of economic arguments in favor of increasing investment in
              PHC. It has been proven that health systems with a PHC-based
              foundation result in improved clinical outcomes, increased
              efficiency, better quality of care and enhanced patient
              satisfaction.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn">
            <p>
              PHC also goes beyond providing health care services to
              individuals. It is a whole-of-society approach that seeks to
              address the broader determinants of health, such as
              community-level disease-prevention efforts, and to empower
              individuals, families and communities to get involved in their own
              health.{" "}
            </p>
          </ScrollAnimation>
        </section>
      </div>

      <div className="content-image">
        <img src={require("../../images/products/quote1.jpeg")} alt="Achieve" />
      </div>

      <div className="content-wrapper" id="Moving_toward_PHC">
        <section>
          <h1>Moving Toward PHC </h1>

          <ScrollAnimation animateIn="fadeIn">
            <p>
              Primary health care is important because it is the foundation of a
              strong health system. It leads to more equitable health across the
              community and leads to greater patient and health worker
              satisfaction.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn">
            <p>
              Taking a PHC approach is about meeting the majority of people’s
              health needs through services provided directly in the community
              where they live. A PHC approach means working with
              multidisciplinary teams – doctors, nurses, caregivers, therapists,
              and others – to treat the person rather than the disease.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeIn">
            <p>
              By providing health care services throughout a person’s life, PHC
              allows people to develop long-term partnerships with their care
              providers. And it means that health care providers can address not
              only treatment needs, but also prevention, health promotion,
              rehabilitation and palliation services.
            </p>
          </ScrollAnimation>
        </section>
      </div>

      <div className="content-image">
        <img src={require("../../images/products/quote2.jpeg")} alt="Achieve" />
      </div>

      <div className="content-wrapper" id="health_promotions">
        <section>
          <h1>What are health Promotions </h1>

          <ScrollAnimation animateIn="fadeIn">
            <p>
              Health promotion enables people to increase control over their own
              health. It covers a wide range of social and environmental
              interventions that are designed to benefit and protect individual
              people’s health and quality of life by addressing and preventing
              the root causes of ill health, not just focusing on treatment and
              cure. There are 3 key elements of health promotion:
            </p>
          </ScrollAnimation>

          <ol>
            <section>
              <li>Good governance for health</li>

              <ScrollAnimation animateIn="fadeIn">
                <p>
                  Health promotion requires policy makers across all government
                  departments to make health a central line of government
                  policy. This means they must factor health implications into
                  all the decisions they take, and prioritize policies that
                  prevent people from becoming ill and protect them from
                  injuries.
                </p>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeIn">
                <p>
                  These policies must be supported by regulations that match
                  private sector incentives with public health goals. For
                  example, by aligning tax policies on unhealthy or harmful
                  products such as alcohol, tobacco, and food products which are
                  high in salt, sugars and fat with measures to boost trade in
                  other areas. And through legislation that supports healthy
                  urbanization by creating walkable cities, reducing air and
                  water pollution, enforcing the wearing of seat belts and
                  helmets.
                </p>
              </ScrollAnimation>
            </section>

            <section>
              <li>Health literacy</li>
              <ScrollAnimation animateIn="fadeIn">
                <p>
                  People need to acquire the knowledge, skills and information
                  to make healthy choices, for example about the food they eat
                  and healthcare services that they need. They need to have
                  opportunities to make those choices. And they need to be
                  assured of an environment in which people can demand further
                  policy actions to further improve their health.
                </p>
              </ScrollAnimation>
            </section>

            <section>
              <li>Healthy cities</li>

              <ScrollAnimation animateIn="fadeIn">
                <p>
                  Cities have a key role to play in promoting good health.
                  Strong leadership and commitment at the municipal level is
                  essential to healthy urban planning and to build up preventive
                  measures in communities and primary health care facilities.
                  From healthy cities evolve healthy countries and, ultimately,
                  a healthier world.
                </p>
              </ScrollAnimation>
            </section>
          </ol>
        </section>
      </div>
      <section>
        <div className="content-wrapper">
          <h1>OTHER SERVICES </h1>
        </div>

        <div className="sp-container">
          <Link to="/products/smart_library">
            <div className="sp-card">
              <h1>Smart Library</h1>
            </div>
          </Link>
        </div>
        <div className="sp-container">
          <Link to="/products/digital_classes">
            <div className="sp-card background-second">
              <h1>Digital Classes</h1>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HealthCenter;
