export const getConnectedAddressForUser = async (fid: number) => {
  const res = await fetch(
    `https://hub.pinata.cloud/v1/verificationsByFid?fid=${fid}`
  );
  const json = await res.json();
  // sourcery skip: inline-immediately-returned-variable
  // sourcery skip: use-object-destructuring
  const address = json.messages[0].data.verificationAddAddressBody.address;
  return address;
};
