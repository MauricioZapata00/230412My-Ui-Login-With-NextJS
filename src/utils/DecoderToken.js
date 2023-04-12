import jwtDecode from "jwt-decode";

const getPayload = (decode) => ({
    fullName: decode.fullName,
    profile: decode.groups[decode.groups.length -1]
});

const DecoderToken = (token) => {
    const decode = jwtDecode(token);
    return getPayload(decode);
};

export default DecoderToken;