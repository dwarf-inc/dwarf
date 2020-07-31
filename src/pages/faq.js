import React from "react";
import Layout from "../layout";
import FaqCard from "../components/UI/faq_card";

const Faq = () => {
  const faq = [
    {
      title: "What is diabetes?",
      description:
        "Diabetes Mellitus (or Diabetes) is a chronic condition that affects your body's ability to utilize the food. This disease stops the body from using up energy from the food one eats or consumes. This happens when the pancreas produces little to no insulin. Diabetes Mellitus also happens when the pancreas produces insulin but it isn’t doing its job.",
    },
  ];
  return (
    <Layout>
      <div className="faq">
        <h1 className="main-header">FAQ</h1>

        <input type="text" placeholder="Search" />

        <div className="container" style={{ marginTop: "30px" }}>
          <section>
            <FaqCard heading="What is diabetes Mellitus?" id="diabetes">
              <p>
                Diabetes Mellitus (or Diabetes) is a chronic condition that
                affects your body's ability to utilize the food. This disease
                stops the body from using up energy from the food one eats or
                consumes. This happens when the pancreas produces little to no
                insulin. Diabetes Mellitus also happens when the pancreas
                produces insulin but it isn’t doing its job.
              </p>
              <section>
                <h3>Types of Diabetes</h3>
                <p>There are three major types of diabetes:</p>
                <ul>
                  <li>
                    - <span>Type 1 diabetes: </span>By birth; insulin-dependent
                    diabetes
                  </li>
                  <li>
                    - <span>Type 2 diabetes: </span>Adult-onset; affects the way
                    the body processes blood sugar (glucose).
                  </li>
                  <li>
                    - <span>Gestational diabetes: </span>A form of high blood
                    sugar affecting pregnant women.
                  </li>
                </ul>
              </section>
              <hr />
              <section>
                <h3>Symptoms</h3>
                <p>
                  If blood glucose significantly rises, the symptoms of the two
                  diabetes can be very similar.
                </p>
                <ul>
                  <li>- Unexplained weight loss</li>
                  <li>
                    - Extreme hunger even when the person is regularly eating
                  </li>
                  <li>- Sudden vision loss or blurred vision</li>
                  <li>- Tingling or numbness in the hands or feet</li>
                </ul>
              </section>
              <hr />
              <section>
                <h3>Complications caused due to Diabetes</h3>
                <p>
                  Diabetes can lead to innumerable complications too such as:
                </p>
                <ul>
                  <li>- Stroke</li>
                  <li>- Diabetic retinopathy that can cause blindness</li>
                  <li>- Chronic kidney diseases</li>
                  <li>- Heart attacks</li>
                  <li>
                    - Sensation in the feet decreasing over time because of
                    diabetic neuropathy
                  </li>
                </ul>
              </section>
              <hr />
              <section>
                <h3>Treatment</h3>
                <p>
                  <span>Self-care: </span>Individualized diet planned with the
                  help of a registered clinical dietitian is important. The diet
                  should be high in fibre, fruits and vegetables; and low in
                  simple sugars and saturated fats.
                </p>
                <p>
                  <span>Medication: </span>
                  Blood glucose lowering or insulin-related medications may be
                  prescribed depending upon the severity of occurrence.
                </p>
                <p>
                  <span>Specialists: </span>
                  At mfine, you can connect with a team of doctor and dietitian
                  who will aid in your journey of healing and treatment. Our
                  diabetologists can also help you with any other issue you
                  have, related to the disease. Don’t wait and seek guidance on
                  mfine in time; after all, your health is in your hands!
                  Consult a diabetologist or a general physician once you
                  identify the symptoms. Diagnosis of this condition plays a
                  vital part in curing it.
                </p>
              </section>
            </FaqCard>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Faq;
