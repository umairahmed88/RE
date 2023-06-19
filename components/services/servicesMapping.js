import servicesData from "@/data/serviceData";

const serviceMapping = {
	construction: {
		pageTitle: "Construction Services",
		data: servicesData.ConstructionData,
	},
	glass: {
		pageTitle: "Aluminum and Glass Services",
		data: servicesData.AluminumGlassData,
	},
	appdev: {
		pageTitle: "App Development Services",
		data: servicesData.AppDevData,
	},
	cattle: {
		pageTitle: "Cattle Farming Services",
		data: servicesData.CattleFarmData,
	},
	electrical: {
		pageTitle: "Electrical Services",
		data: servicesData.ElectricalData,
	},
	plumbing: {
		pageTitle: "Plumbing Services",
		data: servicesData.PlumbingData,
	},
	painter: {
		pageTitle: "Painter Services",
		data: servicesData.PainterData,
	},
	tile: {
		pageTitle: "Commercial Tile and Grout Repairing Services",
		data: servicesData.CommercialTileAndGroutData,
	},
	carpenter: {
		pageTitle: "Carpenter Services",
		data: servicesData.CarpenterServicesData,
	},
	door: {
		pageTitle: "Door Fitting And Lock Change Services",
		data: servicesData.DoorServicesData,
	},
	gate: {
		pageTitle: "Steel And Wooden Main Gate Services",
		data: servicesData.SteelAndWoodenGateServicesData,
	},
	generator: {
		pageTitle: "Generator Repairing Services",
		data: servicesData.GeneratorServicesData,
	},
	cleaning: {
		pageTitle: "Cleaning Services",
		data: servicesData.CleaningServicesData,
	},
	cctv: {
		pageTitle: "CCTV Camera And App Device Services",
		data: servicesData.CCTVServicesData,
	},
	ac: {
		pageTitle: "AC Services",
		data: servicesData.ACData,
	},
	fumigation: {
		pageTitle: "Fumigation Services",
		data: servicesData.FumigationServicesData,
	},
};

export default serviceMapping;
