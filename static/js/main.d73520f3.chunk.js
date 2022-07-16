(this.webpackJsonpmoroccoswap = this.webpackJsonpmoroccoswap || []).push([
  [0],
  {
    267: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MINTER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PAUSER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Start","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"Stop","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"Updater","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_stakeholder","type":"address"}],"name":"addStakeholder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_stakeholder","type":"address"}],"name":"calculateReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stake","type":"uint256"}],"name":"createStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"distributeRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"isStakeholder","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_stake","type":"uint256"}],"name":"removeStake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_stakeholder","type":"address"}],"name":"removeStakeholder","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_stakeholder","type":"address"}],"name":"rewardOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_stakeholder","type":"address"}],"name":"stakeOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalStakes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"update","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawReward","outputs":[],"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    268: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"gameId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalReward","type":"uint256"}],"name":"AddRound","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"addr","type":"address"}],"name":"SetOperator","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"gameId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"position","type":"uint256"}],"name":"Spin","type":"event"},{"anonymous":false,"inputs":[],"name":"UnPaused","type":"event"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"addRound","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentRound","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserInfo","outputs":[{"internalType":"uint256[]","name":"totalParticipatedRound","type":"uint256[]"},{"internalType":"uint256","name":"lastRound","type":"uint256"},{"internalType":"uint256","name":"lastIndex","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"gameID","type":"uint256"}],"name":"getUserTotalSpin","outputs":[{"internalType":"uint256","name":"red","type":"uint256"},{"internalType":"uint256","name":"blue","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"address[]","name":"_token","type":"address[]"}],"name":"inCaseTokensGetStuck","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxGameDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"operator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"roundInfo","outputs":[{"internalType":"uint256","name":"gameId","type":"uint256"},{"internalType":"uint256","name":"startTimestamp","type":"uint256"},{"internalType":"uint256","name":"closeTimestamp","type":"uint256"},{"internalType":"uint256","name":"rewardAmount","type":"uint256"},{"internalType":"uint256","name":"totalWinner","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_duration","type":"uint256"}],"name":"setMaxGameDuration","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"setRewardToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"spin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"lastRound","type":"uint256"},{"internalType":"uint256","name":"lastIndex","type":"uint256"}],"stateMutability":"view","type":"function"}]'
      );
    },
    269: function (e) {
      e.exports = JSON.parse(
        '[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_operator","type":"address"}],"name":"AddOperator","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"rewardToken0","type":"address"},{"indexed":false,"internalType":"address","name":"rewardToken1","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"reward1","type":"uint256"}],"name":"AddReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"rewardToken","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_operator","type":"address"}],"name":"RemoveOperator","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_rewardToken","type":"address"}],"name":"RewardToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"address","name":"evangalist","type":"address"}],"name":"SetEvangalist","type":"event"},{"anonymous":false,"inputs":[],"name":"UnPaused","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"accPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"addCreditPoints","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_addr","type":"address[]"}],"name":"addOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"rewardToken0","type":"address"},{"internalType":"contract IERC20","name":"rewardToken1","type":"address"},{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"addReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"rewardToken","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"addrewardtoken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"rewardTokens","type":"address[]"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"creditLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getReferral","outputs":[{"internalType":"address","name":"referral","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"getUserInfo","outputs":[{"internalType":"address","name":"referral","type":"address"},{"internalType":"address[]","name":"referre","type":"address[]"},{"internalType":"uint256","name":"points","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"operator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_addr","type":"address"}],"name":"removeOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"referral","type":"address"}],"name":"setEvangalist","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalCreditsPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unPause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"bool","name":"status","type":"bool"},{"internalType":"address","name":"referral","type":"address"},{"internalType":"uint256","name":"points","type":"uint256"}],"stateMutability":"view","type":"function"}]'
      );
    },
    280: function (e, t, n) {},
    281: function (e, t, n) {},
    284: function (e, t, n) {},
    311: function (e, t, n) {},
    327: function (e, t) {},
    331: function (e, t) {},
    333: function (e, t) {},
    337: function (e, t) {},
    363: function (e, t) {},
    365: function (e, t) {},
    374: function (e, t) {},
    376: function (e, t) {},
    387: function (e, t) {},
    389: function (e, t) {},
    504: function (e, t) {},
    506: function (e, t) {},
    513: function (e, t) {},
    514: function (e, t) {},
    539: function (e, t) {},
    546: function (e, t) {},
    607: function (e, t) {},
    631: function (e, t, n) {},
    632: function (e, t, n) {},
    634: function (e, t, n) {
      "use strict";
      n.r(t);
      var a,
        s = n(1),
        i = n(81),
        r = n.n(i),
        u = (n(280), n(21)),
        p = (n(281), n(46)),
        o = n(18),
        l = (n(282), n(283), n(284), n(23)),
        c = n(114),
        d = n(26),
        y = n(15),
        m = n.n(y),
        b = n(95),
        f = n(116),
        j = n(270),
        v = Object(j.a)({
          name: "toasts",
          initialState: { data: [] },
          reducers: {
            push: function (e, t) {
              var n = t.payload,
                a = e.data.findIndex(function (e) {
                  return e.id === t.payload.id;
                });
              a >= 0 && e.data.splice(a, 1), e.data.unshift(n);
            },
            remove: function (e, t) {
              var n = e.data.findIndex(function (e) {
                return e.id === t.payload;
              });
              n >= 0 && e.data.splice(n, 1);
            },
            clear: function (e) {
              e.data = [];
            },
          },
        }),
        x = v.actions,
        O = x.clear,
        T = x.remove,
        h = x.push,
        w = (v.reducer, "string"),
        g = "string",
        M = "string",
        k = "string",
        N = n(66),
        C = n(261),
        S = n(262),
        A = n(263),
        R = n(264),
        E = n.n(R),
        _ = [
          "https://bsc-dataseed.binance.org/",
          "https://bsc-dataseed.binance.org/",
          "https://bsc-dataseed.binance.org/",
        ],
        I = function () {
          var e = E()(0, _.length - 1);
          return _[e];
        },
        D = "injected",
        P = "walletconnect",
        U = "bsc",
        F = I(),
        L = parseInt("56", 10),
        B = new C.a({ supportedChainIds: [L] }),
        W = new S.a({
          rpc: Object(N.a)({}, L, F),
          bridge: "https://bridge.walletconnect.org",
          qrcode: !0,
          pollingInterval: 12e3,
        }),
        H = new A.BscConnector({ supportedChainIds: [L] }),
        J =
          ((a = {}),
          Object(N.a)(a, D, B),
          Object(N.a)(a, P, W),
          Object(N.a)(a, U, H),
          a),
        G = (function () {
          var e = Object(d.a)(
            m.a.mark(function e() {
              var t;
              return m.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!(t = window.ethereum)) {
                          e.next = 15;
                          break;
                        }
                        return (
                          56,
                          (e.prev = 3),
                          (e.next = 6),
                          t.request({
                            method: "wallet_addEthereumChain",
                            params: [
                              {
                                chainId: "0x".concat((56).toString(16)),
                                chainName: "Binance Smart Chain Mainnet",
                                nativeCurrency: {
                                  name: "BSC",
                                  symbol: "BNB",
                                  decimals: 18,
                                },
                                rpcUrls: ["https://bsc-dataseed.binance.org/"],
                                blockExplorerUrls: ["https://bscscan.com"],
                              },
                            ],
                          })
                        );
                      case 6:
                        return e.abrupt("return", !0);
                      case 9:
                        return (
                          (e.prev = 9),
                          (e.t0 = e.catch(3)),
                          console.error(e.t0),
                          e.abrupt("return", !1)
                        );
                      case 13:
                        e.next = 17;
                        break;
                      case 15:
                        return (
                          console.error(
                            "Can't setup the BSC network on metamask because window.ethereum is undefined"
                          ),
                          e.abrupt("return", !1)
                        );
                      case 17:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[3, 9]]
              );
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        V = function () {
          var e = Object(l.c)(),
            t = e.activate,
            n = e.deactivate,
            a = (function () {
              var e = Object(f.b)();
              return Object(s.useMemo)(
                function () {
                  var t = function (t) {
                    return e(h(t));
                  };
                  return {
                    toastError: function (e, n) {
                      return t({
                        id: Object(b.kebabCase)(e),
                        type: g,
                        title: e,
                        description: n,
                      });
                    },
                    toastInfo: function (e, n) {
                      return t({
                        id: Object(b.kebabCase)(e),
                        type: k,
                        title: e,
                        description: n,
                      });
                    },
                    toastSuccess: function (e, n) {
                      return t({
                        id: Object(b.kebabCase)(e),
                        type: w,
                        title: e,
                        description: n,
                      });
                    },
                    toastWarning: function (e, n) {
                      return t({
                        id: Object(b.kebabCase)(e),
                        type: M,
                        title: e,
                        description: n,
                      });
                    },
                    push: t,
                    remove: function (t) {
                      return e(T(t));
                    },
                    clear: function () {
                      return e(O());
                    },
                  };
                },
                [e]
              );
            })().toastError,
            i = Object(s.useCallback)(function (e) {
              var n = J[e];
              n
                ? t(
                    n,
                    (function () {
                      var e = Object(d.a)(
                        m.a.mark(function e(s) {
                          return m.a.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (!(s instanceof l.a)) {
                                    e.next = 7;
                                    break;
                                  }
                                  return (e.next = 3), G();
                                case 3:
                                  e.sent && t(n), (e.next = 9);
                                  break;
                                case 7:
                                  (n.walletConnectProvider = void 0),
                                    a(s.name, s.message);
                                case 9:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()
                  )
                : a("Can't find connector", "The connector config is wrong");
            }, []);
          return { login: i, logout: n };
        },
        q = n(0),
        X = function (e) {
          e.setNavActive, e.navActive;
          var t = Object(l.c)().account,
            n = V(),
            a = n.login,
            i = n.logout,
            r = Object(s.useState)(!1),
            p = Object(u.a)(r, 2),
            o = (p[0], p[1], Object(s.useState)(!1)),
            d = Object(u.a)(o, 2),
            y =
              (d[0],
              d[1],
              function () {
                console.log("here", t),
                  localStorage.setItem("connectorId", "injected"),
                  t ? i() : a("injected");
              });
          return Object(q.jsx)(q.Fragment, {
            children: Object(q.jsx)("section", {
              className: "main-navbar",
              children: Object(q.jsx)("div", {
                className: "container-fluid",
                children: Object(q.jsx)("div", {
                  className: "row",
                  children: Object(q.jsx)("div", {
                    className: "col-11 mx-auto",
                    children: Object(q.jsxs)("nav", {
                      className: "navbar navbar-expand-lg",
                      children: [
                        Object(q.jsx)("a", {
                          className: "navbar-brand text-sm-right text-center ",
                          href: "/",
                          children: Object(q.jsx)(c.a, {
                            to: "/",
                            children: Object(q.jsx)("img", {
                              src: "/logo.svg",
                              className: "img-fluid d-sm-block d-block",
                              alt: "",
                            }),
                          }),
                        }),
                        Object(q.jsxs)("button", {
                          className: "navbar-toggler",
                          type: "button",
                          "data-toggle": "collapse",
                          "data-target": "#navbarSupportedContent",
                          "aria-controls": "navbarSupportedContent",
                          "aria-expanded": "false",
                          "aria-label": "Toggle navigation",
                          children: [
                            Object(q.jsx)("div", { class: "style-bar" }),
                            Object(q.jsx)("div", { class: "style-bar" }),
                            Object(q.jsx)("div", { class: "style-bar" }),
                          ],
                        }),
                        Object(q.jsxs)("div", {
                          className: "collapse navbar-collapse",
                          id: "navbarSupportedContent",
                          children: [
                            Object(q.jsx)("ul", {
                              className: "navbar-nav mx-auto",
                            }),
                            Object(q.jsx)("form", {
                              className: "form-inline my-2 my-lg-0",
                            }),
                            t
                              ? Object(q.jsx)("button", {
                                  className: "btn-common button_design",
                                  onClick: y,
                                  children: "Disconnect Wallet",
                                })
                              : Object(q.jsx)("button", {
                                  className: "btn-common button_design",
                                  onClick: y,
                                  children: "Connect Wallet",
                                }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        },
        Y = "bsc",
        K = function () {
          var e = V().login;
          Object(s.useEffect)(
            function () {
              var t = window.localStorage.getItem("connectorId");
              t && t !== Y && e(t);
            },
            [e]
          );
        },
        $ = (n(311), n(312), n(82)),
        z = n.n($),
        Q = I(),
        Z = new z.a.providers.HttpProvider(Q, { timeout: 1e4 }),
        ee = new z.a(Z),
        te = function () {
          return ee;
        },
        ne = ee,
        ae = function () {
          var e = Object(l.c)().library,
            t = Object(s.useRef)(e),
            n = Object(s.useState)(e ? new z.a(e) : te()),
            a = Object(u.a)(n, 2),
            i = a[0],
            r = a[1];
          return (
            Object(s.useEffect)(
              function () {
                e !== t.current && (r(e ? new z.a(e) : te()), (t.current = e));
              },
              [e]
            ),
            i
          );
        },
        se = n(267),
        ie =
          (n(268),
          n(269),
          function (e, t, n) {
            return new (null !== n && void 0 !== n ? n : ne).eth.Contract(e, t);
          }),
        re = function (e, t) {
          return ie(se, e, t);
        },
        ue = {
          YfethContractAddress: "0x634c376B95Dce178E9448C41979E2CCC3814B26C",
          MorocoContractcAddress: "0x634c376B95Dce178E9448C41979E2CCC3814B26C",
          evangelismAddress: "0x634c376B95Dce178E9448C41979E2CCC3814B26C",
        }.YfethContractAddress;
      n(631);
      var pe = function (e) {
        var t = e.active,
          n = Object(s.useState)("0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"),
          a = Object(u.a)(n, 2),
          i =
            (a[0],
            a[1],
            (function () {
              var e = Object(s.useState)(0),
                t = Object(u.a)(e, 2),
                n = t[0],
                a = t[1],
                i = Object(l.c)().account,
                r = ae(),
                p = re(ue, r);
              return (
                Object(s.useEffect)(
                  function () {
                    if (i) {
                      var e = (function () {
                        var e = Object(d.a)(
                          m.a.mark(function e() {
                            var t;
                            return m.a.wrap(
                              function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.prev = 0),
                                        (e.next = 3),
                                        p.methods.balanceOf(i).call()
                                      );
                                    case 3:
                                      return (t = e.sent), (e.next = 6), a(t);
                                    case 6:
                                      e.next = 11;
                                      break;
                                    case 8:
                                      (e.prev = 8), (e.t0 = e.catch(0)), a(0);
                                    case 11:
                                    case "end":
                                      return e.stop();
                                  }
                              },
                              e,
                              null,
                              [[0, 8]]
                            );
                          })
                        );
                        return function () {
                          return e.apply(this, arguments);
                        };
                      })();
                      e();
                    } else a(0);
                  },
                  [i]
                ),
                n
              );
            })()),
          r =
            ((function () {
              var e = Object(s.useState)(0),
                t = Object(u.a)(e, 2),
                n = t[0],
                a = t[1],
                i = Object(l.c)().account,
                r = ae(),
                p = re(ue, r);
              Object(s.useEffect)(
                function () {
                  if (i) {
                    var e = (function () {
                      var e = Object(d.a)(
                        m.a.mark(function e() {
                          var t;
                          return m.a.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      (e.next = 3),
                                      p.methods.withdrawableDividendOf(i).call()
                                    );
                                  case 3:
                                    return (t = e.sent), (e.next = 6), a(t);
                                  case 6:
                                    e.next = 11;
                                    break;
                                  case 8:
                                    (e.prev = 8), (e.t0 = e.catch(0)), a(0);
                                  case 11:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[0, 8]]
                          );
                        })
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })();
                    i && e();
                  } else a(0);
                },
                [i]
              );
            })(),
            (function () {
              var e = Object(s.useState)(0),
                t = Object(u.a)(e, 2),
                n = t[0],
                a = t[1],
                i = Object(l.c)().account,
                r = ae(),
                p = re(ue, r);
              Object(s.useEffect)(
                function () {
                  if (i) {
                    var e = (function () {
                      var e = Object(d.a)(
                        m.a.mark(function e() {
                          var t;
                          return m.a.wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      (e.next = 3),
                                      p.methods
                                        .getTotalDividendsDistributed(i)
                                        .call()
                                    );
                                  case 3:
                                    return (t = e.sent), (e.next = 6), a(t);
                                  case 6:
                                    e.next = 11;
                                    break;
                                  case 8:
                                    (e.prev = 8), (e.t0 = e.catch(0)), a(0);
                                  case 11:
                                  case "end":
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[0, 8]]
                          );
                        })
                      );
                      return function () {
                        return e.apply(this, arguments);
                      };
                    })();
                    i && e();
                  } else a(0);
                },
                [i]
              );
            })(),
            (function () {
              var e = Object(l.c)().account,
                t = ae(),
                n = re(ue, t);
              return (
                console.log("hereeeeeeeeeeee", n),
                {
                  deployStandardToken: Object(s.useCallback)(
                    function (a) {
                      console.log("args", a);
                      try {
                        return n.methods
                          .createStake(t.utils.toWei(a, "ether"))
                          .send({ from: e })
                          .on("transactionHash", function (e) {
                            return e.transactionHash;
                          });
                      } catch (s) {
                        console.log(s);
                      }
                    },
                    [e, n]
                  ),
                }
              );
            })().deployStandardToken),
          p = (function () {
            var e = Object(l.c)().account,
              t = ae(),
              n = re(ue, t);
            return (
              console.log("hereeeeeeeeeeee", n),
              {
                deployLPToken: Object(s.useCallback)(
                  function () {
                    try {
                      return n.methods
                        .withdrawReward()
                        .send({ from: e })
                        .on("transactionHash", function (e) {
                          return e.transactionHash;
                        });
                    } catch (t) {
                      console.log(t);
                    }
                  },
                  [e, n]
                ),
              }
            );
          })().deployLPToken,
          o = Object(s.useState)("0"),
          c = Object(u.a)(o, 2),
          y = c[0],
          b = c[1],
          f = Object(s.useState)(""),
          j = Object(u.a)(f, 2),
          v = (j[0], j[1]),
          x = (function () {
            var e = Object(d.a)(
              m.a.mark(function e() {
                var t;
                return m.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), r(y);
                      case 2:
                        (t = e.sent), console.log("approveee", t);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })(),
          O = (function () {
            var e = Object(d.a)(
              m.a.mark(function e() {
                var t;
                return m.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), p();
                      case 2:
                        (t = e.sent), console.log("approveee", t);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return Object(q.jsx)("div", {
          children: Object(q.jsx)("section", {
            className: t ? "top-cards-div pt-4 ml-5" : "top-cards-div pt-4",
            children: Object(q.jsxs)("div", {
              className: "container",
              children: [
                Object(q.jsx)("p", {
                  className: "pts text-color",
                  children:
                    "KungPao Token (PAO) CONTRACT ADDRESS : 0x634c376B95Dce178E9448C41979E2CCC3814B26C",
                }),
                Object(q.jsxs)("div", {
                  className: "row px-sm-0 px-4",
                  children: [
                    Object(q.jsx)("div", {
                      className: "col-md-6 col-12 mx-auto",
                      children: Object(q.jsx)("a", {
                        children: Object(q.jsx)("button", {
                          className: "w-100 box",
                          children: Object(q.jsxs)("div", {
                            className: "innerCards",
                            children: [
                              Object(q.jsx)("div", {
                                className: "newheader",
                                children: Object(q.jsxs)("h4", {
                                  children: [
                                    Object(q.jsx)("img", {
                                      src: "/box-icon.svg",
                                    }),
                                    " PAO",
                                  ],
                                }),
                              }),
                              Object(q.jsxs)("p", {
                                className: "mt-1 text-center",
                                children: [
                                  "My Balance ",
                                  i / Math.pow(10, 18),
                                  "  PAO",
                                ],
                              }),
                              Object(q.jsx)("input", {
                                type: "text",
                                className: "form-control",
                                placeholder: "Enter amount to stake",
                                onChange: function (e) {
                                  return b(e.target.value);
                                },
                              }),
                              Object(q.jsx)("button", {
                                className: "btn btn-stake",
                                onClick: x,
                                children: "Stake",
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                    Object(q.jsx)("div", {
                      className: "col-md-6 col-12 mx-auto",
                      children: Object(q.jsx)("a", {
                        children: Object(q.jsx)("button", {
                          className: "w-100",
                          children: Object(q.jsxs)("div", {
                            className: "innerCards ",
                            children: [
                              Object(q.jsx)("div", {
                                className: "newheader",
                                children: Object(q.jsxs)("h4", {
                                  children: [
                                    Object(q.jsx)("img", {
                                      src: "/box-icon.svg",
                                    }),
                                    " PAO",
                                  ],
                                }),
                              }),
                              Object(q.jsxs)("p", {
                                className: "mt-1 text-center",
                                children: [
                                  "My Balance ",
                                  i / Math.pow(10, 18),
                                  " PAO",
                                ],
                              }),
                              Object(q.jsx)("input", {
                                type: "text",
                                className: "form-control",
                                placeholder: "Enter amount to withdraw",
                                onChange: function (e) {
                                  return v(e.target.value);
                                },
                              }),
                              Object(q.jsx)("button", {
                                className: "btn btn-stake",
                                onClick: O,
                                children: "Withdraw Reward",
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
      var oe = function (e) {
        var t = e.active;
        return Object(q.jsx)("div", {
          className: t
            ? "d-flex justify-content-center align-items-center ml-5 ptb"
            : "d-flex justify-content-center align-items-center ptb",
          children: Object(q.jsx)("h2", {
            children: "Website under service...",
          }),
        });
      };
      n(632);
      var le = function () {
          var e = Object(s.useState)(!1),
            t = Object(u.a)(e, 2),
            n = t[0];
          return (
            t[1],
            console.log(n),
            Object(q.jsx)(q.Fragment, {
              children: Object(q.jsx)("div", {
                className: "sidebar-main",
                children: Object(q.jsx)("div", {
                  className: "container-fluid p-0",
                  children: Object(q.jsxs)("div", {
                    className: "row",
                    children: [
                      Object(q.jsx)("div", {
                        className: n ? "col-2 p-0" : "col-0 p-0",
                        children: Object(q.jsxs)("div", {
                          className: "sidebar-components",
                          children: [
                            Object(q.jsx)("div", {
                              className: "sidebar-compo-innerContent pt-4",
                              children: Object(q.jsxs)("ul", {
                                className:
                                  "list-inline d-flex align-items-center",
                                children: [
                                  Object(q.jsx)("li", {
                                    className: "list-inline-item",
                                    children: Object(q.jsx)("img", {
                                      src: "hash-max-assets/sidebar/home-icon.svg",
                                      alt: "",
                                    }),
                                  }),
                                  n &&
                                    Object(q.jsx)("li", {
                                      className: "list-inline-item pt-1",
                                      children: Object(q.jsx)("h6", {
                                        children: "Dashboard",
                                      }),
                                    }),
                                ],
                              }),
                            }),
                            Object(q.jsx)("div", {
                              className: "sidebar-compo-innerContent",
                              children: Object(q.jsxs)("ul", {
                                className:
                                  "list-inline d-flex align-items-center",
                                children: [
                                  Object(q.jsx)("li", {
                                    className: "list-inline-item",
                                    children: Object(q.jsx)("img", {
                                      src: "hash-max-assets/sidebar/swap-icon.svg",
                                      alt: "",
                                    }),
                                  }),
                                  n &&
                                    Object(q.jsx)("li", {
                                      className: "list-inline-item pt-1",
                                      children: Object(q.jsx)("h6", {
                                        children: "Swap",
                                      }),
                                    }),
                                ],
                              }),
                            }),
                            Object(q.jsx)("div", {
                              className: "sidebar-compo-innerContent",
                              href: "/staking",
                              children: Object(q.jsxs)("ul", {
                                className:
                                  "list-inline d-flex align-items-center",
                                children: [
                                  Object(q.jsx)("li", {
                                    className: "list-inline-item",
                                    children: Object(q.jsx)("img", {
                                      src: "hash-max-assets/sidebar/farms-icon.svg",
                                      alt: "",
                                    }),
                                  }),
                                  n &&
                                    Object(q.jsx)("li", {
                                      className: "list-inline-item pt-1",
                                      children: Object(q.jsx)("h6", {
                                        children: "Staking",
                                      }),
                                    }),
                                ],
                              }),
                            }),
                            n &&
                              Object(q.jsx)("div", {
                                className: "sidebar-compo-footer ",
                                children: Object(q.jsxs)("div", {
                                  className:
                                    "footer-top-div d-flex justify-content-between pb-3 flex-wrap",
                                  children: [
                                    Object(q.jsxs)("ul", {
                                      className:
                                        "list-inline d-flex align-items-center",
                                      children: [
                                        Object(q.jsx)("li", {
                                          className: "list-inline-item",
                                          children: Object(q.jsx)("img", {
                                            src: "hash-max-assets/sidebar/sidebar-footer/small-logo.svg",
                                            alt: "",
                                          }),
                                        }),
                                        Object(q.jsx)("li", {
                                          className: "list-inline-item pt-1",
                                          children: Object(q.jsx)("h6", {
                                            children: "$0.50",
                                          }),
                                        }),
                                      ],
                                    }),
                                    Object(q.jsx)("ul", {
                                      className:
                                        "list-inline d-flex align-items-center",
                                      children: Object(q.jsx)("li", {
                                        className: "list-inline-item",
                                        children: Object(q.jsx)("img", {
                                          src: "hash-max-assets/sidebar/sidebar-footer/world1.svg",
                                          alt: "",
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                          ],
                        }),
                      }),
                      Object(q.jsx)("div", {
                        className: "col-10 mx-auto",
                        children: Object(q.jsx)("button", {
                          className: "burger-button btn-danger",
                          children: Object(q.jsx)("p", {
                            className: "text-white",
                            children: n ? "Hide" : "Show",
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        },
        ce = n(271);
      n(633);
      var de = function () {
          var e = Object(s.useState)(!1),
            t = Object(u.a)(e, 2),
            n = t[0],
            a = t[1];
          return (
            K(),
            Object(q.jsx)(q.Fragment, {
              children: Object(q.jsxs)(p.a, {
                children: [
                  Object(q.jsx)(ce.a, {
                    position: "top-center",
                    autoClose: 5e3,
                    hideProgressBar: !1,
                    newestOnTop: !1,
                    closeOnClick: !0,
                    rtl: !1,
                    pauseOnFocusLoss: !0,
                    draggable: !0,
                    pauseOnHover: !0,
                  }),
                  Object(q.jsx)(X, { navActive: n, setNavActive: a }),
                  Object(q.jsxs)(o.c, {
                    children: [
                      Object(q.jsx)(o.a, {
                        exact: !0,
                        path: "/",
                        children: Object(q.jsx)(pe, { active: n }),
                      }),
                      Object(q.jsx)(o.a, {
                        exact: !0,
                        path: "/underService",
                        children: Object(q.jsx)(oe, { active: n }),
                      }),
                      Object(q.jsx)(o.a, {
                        exact: !0,
                        path: "/sidebar",
                        component: le,
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
        ye = n(22),
        me = n(94),
        be = n(51),
        fe = {},
        je = Object(ye.b)({
          UserReducer: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : fe,
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = t.type,
              a = t.payload;
            switch (n) {
              case "BALANCE":
                return Object(be.a)(Object(be.a)({}, e), {}, { balance: a });
              case "USER_REWARD":
                return Object(be.a)(Object(be.a)({}, e), {}, { reward: a });
              default:
                return e;
            }
          },
        }),
        ve = je,
        xe = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || ye.c,
        Oe = Object(ye.d)(ve, xe(Object(ye.a)(me.a)));
      r.a.render(
        Object(q.jsx)(f.a, {
          store: Oe,
          children: Object(q.jsx)(l.b, {
            getLibrary: function (e) {
              return e;
            },
            children: Object(q.jsx)(de, {}),
          }),
        }),
        document.getElementById("root")
      );
    },
  },
  [[634, 1, 2]],
]);
//# sourceMappingURL=main.d73520f3.chunk.js.map
