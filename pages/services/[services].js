import React from "react";
import { useRouter } from "next/router";
import Services from "@/components/services/service";

function ServicePage() {
	const router = useRouter();
	const { services } = router.query;

	let serviceContent = null;

	if (services === "ac") {
		serviceContent = <Services services='ac' />;
	} else if (services === "carpenter") {
		serviceContent = <Services services='carpenter' />;
	} else if (services === "cattle") {
		serviceContent = <Services services='cattle' />;
	} else if (services === "cctv") {
		serviceContent = <Services services='cctv' />;
	} else if (services === "cleaning") {
		serviceContent = <Services services='cleaning' />;
	} else if (services === "construction") {
		serviceContent = <Services services='construction' />;
	} else if (services === "door") {
		serviceContent = <Services services='door' />;
	} else if (services === "electrical") {
		serviceContent = <Services services='electrical' />;
	} else if (services === "fumigation") {
		serviceContent = <Services services='fumigation' />;
	} else if (services === "gate") {
		serviceContent = <Services services='gate' />;
	} else if (services === "generator") {
		serviceContent = <Services services='generator' />;
	} else if (services === "glass") {
		serviceContent = <Services services='glass' />;
	} else if (services === "painter") {
		serviceContent = <Services services='painter' />;
	} else if (services === "plumbing") {
		serviceContent = <Services services='plumbing' />;
	} else if (services === "tile") {
		serviceContent = <Services services='tile' />;
	} else if (services === "appdev") {
		serviceContent = <Services services='appdev' />;
	} else {
		serviceContent = <div>Invalid Services</div>;
	}

	return <div>{serviceContent}</div>;
}

export default ServicePage;
