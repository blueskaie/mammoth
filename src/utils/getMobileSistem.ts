export const getMobileOperatingSystem = () => {
  const { opera }: any = window;
  const userAgent = navigator.userAgent || navigator.vendor || opera;
  if (/android/i.test(userAgent)) {
    window.location.href = "https://play.app.goo.gl/?link=https://play.google.com/store/apps/details?id=io.metamask";
  }
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    window.location.href = "https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202";
  }
  return "unknown";
};
