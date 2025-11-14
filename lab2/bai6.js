const env = "production";
const version = "v2";
const features = ["auth", "payment", "notification"];

// Tạo object config với computed property names
const config = {
  // Key: api_production_v2
  [`api_${env}_${version}`]: `https://api.example.com/${env}/${version}`,

  // Key cho từng feature: feature_auth, feature_payment, feature_notification
  ...Object.fromEntries(features.map((f) => [`feature_${f}`, true])),

  // Method: getproductionConfig()
  [`get${env}Config`]() {
    const apiKey = `api_${env}_${version}`;
    return {
      api: this[apiKey],
      enabledFeatures: features.filter((f) => this[`feature_${f}`] === true),
    };
  },
};

// Ví dụ sử dụng:
console.log(config);
console.log(config.getproductionConfig());