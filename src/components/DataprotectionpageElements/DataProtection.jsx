import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <div className="relative bg-gray-600 text-white text-center py-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/mnt/data/Intro.png')" }}
        ></div>
        <div className="relative">
          <h1 className="text-4xl font-bold">Data Protection</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto py-12 px-6">
        <p className="text-gray-700 mb-6">
          A service blueprint, also known as a service map, is a visual process
          chart that represents the entire service process, describing the
          actions of all involved actors, both visible and invisible to
          customers.
        </p>

        <h2 className="text-2xl font-bold mb-4">When to use a service blueprint?</h2>
        <ul className="list-disc list-inside text-gray-700 mb-6">
          <li>
            As brainstorming tool for a hypothetical service to understand
            customer needs and stakeholder expectations.
          </li>
          <li>
            As a formalization of an existing product/service to document its
            current state.
          </li>
          <li>
            As a communication tool with stakeholders to align on service
            design.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">
          What does the representation of the service blueprint include?
        </h2>

        <div className="space-y-6 text-gray-700">
          <div>
            <h3 className="text-lg font-semibold">1. Actor</h3>
            <p>
              Any individual or entity that plays a role in the service
              delivery process.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">2. Phases and sub-phases</h3>
            <p>Distinct steps in the overall process of service delivery.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">3. Time</h3>
            <p>
              Represents the temporal aspects, duration, and sequence of events
              in service delivery.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">4. Customer actions</h3>
            <p>
              The things customers do while interacting with a service to
              achieve a goal.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">5. Front-stage actions</h3>
            <p>
              Actions visible to customers during their interaction with the
              service.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">6. Back-stage actions</h3>
            <p>
              Activities that occur behind the scenes to enable service
              delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
