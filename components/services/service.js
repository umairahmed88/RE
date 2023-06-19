import React from "react";
import { useRouter } from "next/router";
import serviceMapping from "./servicesMapping";
import Pages from "./pages";

const Services = () => {
	const router = useRouter();
	const { services } = router.query;

	const selectedService = serviceMapping[services];

	if (!selectedService) {
		return <div>Invalid Services</div>;
	}

	const { pageTitle, data } = selectedService;

	return <Pages pageTitle={pageTitle} data={data} />;
};

export default Services;
