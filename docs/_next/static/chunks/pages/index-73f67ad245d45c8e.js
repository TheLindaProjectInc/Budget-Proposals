(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    48312: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        '/',
        function () {
          return n(91832);
        },
      ]);
    },
    91832: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return X;
          },
        });
      var i,
        a,
        s = n(85893),
        r = n(9008),
        o = n.n(r),
        l = n(95712),
        c = n(18005),
        d = n(47257),
        p = n(68156),
        u = n(80967),
        y = n(45150),
        h = n(8675),
        m = n(67294),
        x = n(64265),
        g = n.n(x),
        w = n(47027);
      function v() {
        let e = new Date();
        return (0, s.jsx)(c.Z, {
          className: 'footer-bar',
          columns: 'equal',
          stackable: !0,
          children: (0, s.jsxs)(c.Z.Row, {
            className: 'footerNavBar',
            children: [
              (0, s.jsx)(c.Z.Column, {
                children: (0, s.jsxs)(w.Z.Item, {
                  as: 'a',
                  href: 'https://metrixcoin.com',
                  target: '_blank',
                  children: [
                    (0, s.jsx)(y.Z, {name: 'bolt'}),
                    'Powered by MetrixCoin',
                  ],
                }),
              }),
              (0, s.jsx)(c.Z.Column, {
                style: {padding: '0px 4px'},
                children: (0, s.jsxs)('a', {
                  href: 'https://github.com/TheLindaProjectInc/Budget-Proposals',
                  target: '_blank',
                  rel: 'noreferrer',
                  children: [
                    '\xa9',
                    '2022',
                    e.getFullYear() !== Number('2022')
                      ? '-'.concat(e.getFullYear(), ' ')
                      : ' ',
                    '\xa0\xa0',
                    'MetrixCoin Developers',
                  ],
                }),
              }),
            ],
          }),
        });
      }
      var f = n(44623),
        j = n(3623);
      function b() {
        return (0, s.jsxs)(f.Z, {
          style: {paddingTop: '22px'},
          children: [
            (0, s.jsx)(j.Z, {as: 'h2', children: 'About the Metrix DGP'}),
            (0, s.jsx)('hr', {}),
            (0, s.jsxs)(j.Z, {
              as: 'h4',
              style: {marginTop: '5%'},
              children: [
                (0, s.jsx)('p', {
                  children:
                    "The Metrix community has the opportunity to affect change on-chain and off-chain. Metroids may make suggestions, propose a development (non-technological or technological) for a preliminary vote and may also submit proposals through the project's Governance Protocol.",
                }),
                (0, s.jsx)('p', {
                  children:
                    'To activate a Governor, Metroids must lock 7.5M MRX in collateral. One responsibility of a Governor is to ping the network or participate in a vote every 28800 blocks, roughly every 30 days. Governors may pass, deny or abstain their vote on any given proposal.',
                }),
                (0, s.jsx)('p', {
                  children:
                    'The minimum number of active Governors in the network to vote for budget and blockchain proposals is 100. The maximum number of Governors in the network is capped at 1,920. This is in line with approximately 1 Governor per block reward every 48 hours. If there is no Governor to receive the reward (e.g. The Governor already received a reward within the last 48 hours), then it goes to the development budget fund.',
                }),
                (0, s.jsx)('p', {
                  children:
                    'The Governance Protocol ensures development through the ever growing Metroid Community. Metroids decide the direction of the project.',
                }),
              ],
            }),
          ],
        });
      }
      var T = [
          {
            inputs: [
              {
                internalType: 'address payable',
                name: '_dgpAddress',
                type: 'address',
              },
              {
                internalType: 'address payable',
                name: '_governanceAddress',
                type: 'address',
              },
            ],
            stateMutability: 'nonpayable',
            type: 'constructor',
          },
          {
            anonymous: !1,
            inputs: [
              {indexed: !1, internalType: 'uint8', name: 'id', type: 'uint8'},
              {
                indexed: !1,
                internalType: 'address',
                name: 'owner',
                type: 'address',
              },
              {
                indexed: !1,
                internalType: 'string',
                name: 'title',
                type: 'string',
              },
              {
                indexed: !1,
                internalType: 'string',
                name: 'desc',
                type: 'string',
              },
              {
                indexed: !1,
                internalType: 'string',
                name: 'url',
                type: 'string',
              },
              {
                indexed: !1,
                internalType: 'uint256',
                name: 'requested',
                type: 'uint256',
              },
              {
                indexed: !1,
                internalType: 'uint8',
                name: 'duration',
                type: 'uint8',
              },
            ],
            name: 'ProposalStarted',
            type: 'event',
          },
          {
            inputs: [],
            name: 'balance',
            outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'dgpAddress',
            outputs: [
              {internalType: 'address payable', name: '', type: 'address'},
            ],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'fund',
            outputs: [],
            stateMutability: 'payable',
            type: 'function',
          },
          {
            inputs: [
              {internalType: 'uint8', name: 'proposalId', type: 'uint8'},
            ],
            name: 'getProposalIndex',
            outputs: [{internalType: 'int16', name: '', type: 'int16'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'governanceAddress',
            outputs: [
              {internalType: 'address payable', name: '', type: 'address'},
            ],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'proposalCount',
            outputs: [{internalType: 'uint8', name: '', type: 'uint8'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [
              {internalType: 'uint8', name: 'proposalId', type: 'uint8'},
            ],
            name: 'proposalVoteStatus',
            outputs: [
              {internalType: 'enum Budget.Vote', name: '', type: 'uint8'},
            ],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
            name: 'proposals',
            outputs: [
              {internalType: 'uint8', name: 'id', type: 'uint8'},
              {internalType: 'address', name: 'owner', type: 'address'},
              {internalType: 'string', name: 'title', type: 'string'},
              {internalType: 'string', name: 'desc', type: 'string'},
              {internalType: 'string', name: 'url', type: 'string'},
              {internalType: 'uint256', name: 'requested', type: 'uint256'},
              {internalType: 'uint8', name: 'duration', type: 'uint8'},
              {internalType: 'uint8', name: 'durationsPaid', type: 'uint8'},
              {internalType: 'uint16', name: 'yesVote', type: 'uint16'},
              {internalType: 'uint16', name: 'noVote', type: 'uint16'},
              {internalType: 'bool', name: 'remove', type: 'bool'},
            ],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'settleBudget',
            outputs: [],
            stateMutability: 'payable',
            type: 'function',
          },
          {
            inputs: [
              {internalType: 'string', name: 'title', type: 'string'},
              {internalType: 'string', name: 'description', type: 'string'},
              {internalType: 'string', name: 'url', type: 'string'},
              {internalType: 'uint256', name: 'requested', type: 'uint256'},
              {internalType: 'uint8', name: 'duration', type: 'uint8'},
            ],
            name: 'startProposal',
            outputs: [],
            stateMutability: 'payable',
            type: 'function',
          },
          {
            inputs: [
              {internalType: 'uint8', name: 'proposalId', type: 'uint8'},
              {internalType: 'enum Budget.Vote', name: 'vote', type: 'uint8'},
            ],
            name: 'voteForProposal',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
          },
        ],
        Z = [
          {inputs: [], stateMutability: 'nonpayable', type: 'constructor'},
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: 'enum DGP.ProposalType',
                name: 'proposalType',
                type: 'uint8',
              },
              {
                indexed: !1,
                internalType: 'address',
                name: 'proposalAddress',
                type: 'address',
              },
            ],
            name: 'NewProposal',
            type: 'event',
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !1,
                internalType: 'enum DGP.ProposalType',
                name: 'proposalType',
                type: 'uint8',
              },
              {
                indexed: !1,
                internalType: 'address',
                name: 'proposalAddress',
                type: 'address',
              },
            ],
            name: 'ProposalPassed',
            type: 'event',
          },
          {
            inputs: [
              {
                internalType: 'enum DGP.ProposalType',
                name: 'proposalType',
                type: 'uint8',
              },
              {
                internalType: 'address',
                name: 'proposalAddress',
                type: 'address',
              },
            ],
            name: 'addProposal',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
          },
          {
            inputs: [],
            name: 'blockGasLimitAddress',
            outputs: [{internalType: 'address', name: '', type: 'address'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'blockSizeAddress',
            outputs: [{internalType: 'address', name: '', type: 'address'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'budgetFeeAddress',
            outputs: [{internalType: 'address', name: '', type: 'address'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'defaultBlockGasLimit',
            outputs: [{internalType: 'uint64', name: '', type: 'uint64'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'defaultBlockSize',
            outputs: [{internalType: 'uint32', name: '', type: 'uint32'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'defaultBudgetFee',
            outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'defaultDustRelayFee',
            outputs: [{internalType: 'uint64', name: '', type: 'uint64'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
            name: 'defaultGasSchedule',
            outputs: [{internalType: 'uint32', name: '', type: 'uint32'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'defaultGovernanceCollateral',
            outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'defaultIncrementalRelayFee',
            outputs: [{internalType: 'uint64', name: '', type: 'uint64'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'defaultMinGasPrice',
            outputs: [{internalType: 'uint32', name: '', type: 'uint32'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'defaultMinRelayTxFee',
            outputs: [{internalType: 'uint64', name: '', type: 'uint64'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'gasScheduleAddress',
            outputs: [{internalType: 'address', name: '', type: 'address'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'getBlockGasLimit',
            outputs: [{internalType: 'uint64[1]', name: '', type: 'uint64[1]'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'getBlockSize',
            outputs: [{internalType: 'uint32[1]', name: '', type: 'uint32[1]'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'getBudgetFee',
            outputs: [
              {internalType: 'uint256[1]', name: '', type: 'uint256[1]'},
            ],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'getGovernanceCollateral',
            outputs: [
              {internalType: 'uint256[1]', name: '', type: 'uint256[1]'},
            ],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'getMinGasPrice',
            outputs: [{internalType: 'uint32[1]', name: '', type: 'uint32[1]'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'getSchedule',
            outputs: [
              {internalType: 'uint32[39]', name: '', type: 'uint32[39]'},
            ],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'getTransactionFeeRates',
            outputs: [{internalType: 'uint64[3]', name: '', type: 'uint64[3]'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'governanceAddress',
            outputs: [
              {internalType: 'address payable', name: '', type: 'address'},
            ],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'governanceCollateralAddress',
            outputs: [{internalType: 'address', name: '', type: 'address'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'maxBlockGasLimit',
            outputs: [{internalType: 'uint64', name: '', type: 'uint64'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'maxBlockSize',
            outputs: [{internalType: 'uint32', name: '', type: 'uint32'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'maxBudgetFee',
            outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'maxDustRelayFee',
            outputs: [{internalType: 'uint64', name: '', type: 'uint64'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'maxGovernanceCollateral',
            outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'maxIncrementalRelayFee',
            outputs: [{internalType: 'uint64', name: '', type: 'uint64'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'maxMinGasPrice',
            outputs: [{internalType: 'uint64', name: '', type: 'uint64'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'maxMinRelayTxFee',
            outputs: [{internalType: 'uint64', name: '', type: 'uint64'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'minBlockGasLimit',
            outputs: [{internalType: 'uint64', name: '', type: 'uint64'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'minBlockSize',
            outputs: [{internalType: 'uint32', name: '', type: 'uint32'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'minGasPriceAddress',
            outputs: [{internalType: 'address', name: '', type: 'address'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'proposal',
            outputs: [
              {internalType: 'bool', name: 'onVote', type: 'bool'},
              {
                internalType: 'address',
                name: 'proposalAddress',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'proposalHeight',
                type: 'uint256',
              },
              {
                internalType: 'enum DGP.ProposalType',
                name: 'proposalType',
                type: 'uint8',
              },
            ],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'transactionFeeRatesAddress',
            outputs: [{internalType: 'address', name: '', type: 'address'}],
            stateMutability: 'view',
            type: 'function',
          },
        ],
        M = [
          {
            inputs: [
              {
                internalType: 'address payable',
                name: '_dgpAddress',
                type: 'address',
              },
            ],
            stateMutability: 'nonpayable',
            type: 'constructor',
          },
          {
            inputs: [],
            name: 'balance',
            outputs: [{internalType: 'uint256', name: '', type: 'uint256'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'budgetAddress',
            outputs: [
              {internalType: 'address payable', name: '', type: 'address'},
            ],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'currentWinner',
            outputs: [
              {internalType: 'address', name: 'winner', type: 'address'},
            ],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'dgpAddress',
            outputs: [
              {internalType: 'address payable', name: '', type: 'address'},
            ],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'enroll',
            outputs: [],
            stateMutability: 'payable',
            type: 'function',
          },
          {
            inputs: [],
            name: 'getGovernorsAddresses',
            outputs: [{internalType: 'address[]', name: '', type: 'address[]'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [],
            name: 'governorCount',
            outputs: [{internalType: 'uint16', name: '', type: 'uint16'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [{internalType: 'address', name: '', type: 'address'}],
            name: 'governors',
            outputs: [
              {internalType: 'uint256', name: 'blockHeight', type: 'uint256'},
              {internalType: 'uint256', name: 'lastPing', type: 'uint256'},
              {internalType: 'uint256', name: 'collateral', type: 'uint256'},
              {internalType: 'uint256', name: 'lastReward', type: 'uint256'},
              {internalType: 'uint16', name: 'addressIndex', type: 'uint16'},
            ],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [
              {
                internalType: 'address',
                name: 'governorAddress',
                type: 'address',
              },
              {internalType: 'bool', name: 'checkPing', type: 'bool'},
              {internalType: 'bool', name: 'checkCanVote', type: 'bool'},
            ],
            name: 'isValidGovernor',
            outputs: [{internalType: 'bool', name: 'valid', type: 'bool'}],
            stateMutability: 'view',
            type: 'function',
          },
          {
            inputs: [
              {internalType: 'address', name: 'governor', type: 'address'},
            ],
            name: 'ping',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
          },
          {
            inputs: [],
            name: 'ping',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
          },
          {
            inputs: [],
            name: 'removeInactiveGovernor',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
          },
          {
            inputs: [
              {internalType: 'address', name: 'winner', type: 'address'},
            ],
            name: 'rewardGovernor',
            outputs: [],
            stateMutability: 'payable',
            type: 'function',
          },
          {
            inputs: [{internalType: 'bool', name: 'force', type: 'bool'}],
            name: 'unenroll',
            outputs: [],
            stateMutability: 'nonpayable',
            type: 'function',
          },
        ];
      let k = {
          DGP: 'fc199dd5d86f60e2c15da35b9c1c1c70e5890c03',
          Governance: '73e6c0383dceed1583eb6a4b2aa9253020cb2b18',
          Budget: '495e4ce99ab534cf8d3faa53c817b632681717fb',
        },
        C = {
          DGP: 'c88ceb07c05ac05666ae982c257c52468aad4f93',
          Governance: '3cc15a2bae287cabb1ef6f26a86fa6f1895708eb',
          Budget: 'f2d61e4cd5fc215071e5e60350261ec4f41ee2b5',
        },
        S = {MainNet: k, TestNet: C},
        N = (e, t) => {
          let n = S[e || 'MainNet'];
          return n[t];
        },
        E = function (e, t) {
          let n = e.length,
            i = '0',
            a = '0';
          if (n > t) (i = e.substring(0, n - t)), (a = e.substring(n - t, n));
          else {
            (i = '0'), (a = '');
            for (let i = 0; i < t; i++)
              i <= n - 1 ? (a += e.substring(i, i + 1)) : (a = '0' + a);
          }
          return ''.concat(i, '.').concat(a);
        },
        A = (e) => {
          let t = ''.concat(e).split('.'),
            n = ['0', '0', '0', '0', '0', '0', '0', '0'];
          if (2 == t.length)
            for (let e = 0; e < 8; e++) t[1].length > e && (n[e] = t[1][e]);
          return ''.concat(t[0]).concat(n.join(''));
        };
      var R = n(10840),
        P = n(80048),
        F = n(52256);
      let _ = {MainNet: k, TestNet: C};
      function B(e) {
        let t = (e, t) => {
            let n = _[e];
            return n[t];
          },
          n = async () => {
            if (window) {
              let n = document.getElementById(
                ''.concat(e.contract, 'Functions')
              );
              if (n) {
                n.innerHTML = '';
                let i = 0,
                  a = new P.vU(e.abi);
                if (
                  (a.forEachFunction((s, r) => {
                    let o = s.format('sighash').replace('0x', ''),
                      l = ''
                        .concat(s.name, '(')
                        .concat(
                          s.inputs.length > 0
                            ? ''.concat(s.inputs.map((e) => e.type).join(','))
                            : '',
                          ')'
                        ),
                      c = document.createElement('div'),
                      d = 'violet';
                    switch (s.stateMutability) {
                      case 'payable':
                        d = 'pink';
                        break;
                      case 'nonpayable':
                        d = 'purple';
                    }
                    (c.className = 'ui segment '.concat(d)),
                      (c.style.opacity = '0.88');
                    let p = document.createElement('div');
                    p.className = 'eight wide column stretched';
                    let u = document.createElement('form');
                    (u.className = 'ui form'),
                      (u.id = ''.concat(e.contract, '_').concat(o)),
                      (u.onsubmit = (n) => {
                        let i = document.getElementById(
                          ''.concat(e.contract, '_').concat(o, 'Msg')
                        );
                        if (i) {
                          (i.innerHTML = ''),
                            i.classList.remove('negative'),
                            i.classList.add('hidden');
                          let n = document.getElementById(
                            ''.concat(e.contract, '_').concat(o)
                          );
                          if (n instanceof HTMLFormElement) {
                            let r = new FormData(n),
                              o = [],
                              c = 0;
                            try {
                              let n;
                              for (let [, e] of r.entries())
                                if (c <= s.inputs.length - 1) {
                                  let t = s.inputs[c++];
                                  'bool' === t.type && (e = 'true' === e),
                                    e ? o.push(e) : o.push('');
                                }
                              let d =
                                s.inputs.length > 0
                                  ? a.encodeFunctionData(l, o)
                                  : a.encodeFunctionData(l, []);
                              'nonpayable' !== s.stateMutability &&
                              'payable' !== s.stateMutability
                                ? (n = async () => {
                                    let n;
                                    let s =
                                        await window.metrimask.rpcProvider.rawCall(
                                          'callcontract',
                                          [
                                            t(e.network, e.contract),
                                            d.replace('0x', ''),
                                          ]
                                        ),
                                      r = s.executionResult;
                                    try {
                                      n = a.decodeFunctionResult(
                                        l,
                                        '0x'.concat(r.output)
                                      );
                                    } catch (e) {
                                      n = [r.excepted];
                                    }
                                    n = n.map((e) => ''.concat(e));
                                    let o =
                                      n && n.join(' ').length > 0
                                        ? n.join(' ')
                                        : 'No Response';
                                    (i.innerHTML =
                                      '<div class="header">Response</div><p>'.concat(
                                        o,
                                        '</p>'
                                      )),
                                      i.classList.remove('hidden');
                                  })
                                : ('payable' !== s.stateMutability &&
                                    r.append(''.concat(l, 'value'), '0'),
                                  (n = async () => {
                                    let n =
                                        await window.metrimask.rpcProvider.rawCall(
                                          'sendtocontract',
                                          [
                                            t(e.network, e.contract),
                                            d.replace('0x', ''),
                                            r.get(''.concat(l, 'value')),
                                            25e4,
                                            5e3,
                                          ]
                                        ),
                                      a = JSON.parse(JSON.stringify(n)),
                                      s =
                                        a && JSON.stringify(a).length > 0
                                          ? JSON.stringify(a)
                                          : 'No Response';
                                    i.classList.remove('negative'),
                                      (i.innerHTML =
                                        '<div class="header">Response</div><p>'.concat(
                                          s,
                                          '</p>'
                                        )),
                                      i.classList.remove('hidden');
                                  })),
                                n();
                            } catch (t) {
                              let e = t.message
                                ? t.message
                                : 'An error occurred';
                              i.classList.add('negative'),
                                (i.innerHTML =
                                  '<div class="header">Error</div><p>'.concat(
                                    e,
                                    '</p>'
                                  )),
                                i.classList.remove('hidden');
                            }
                          }
                        }
                        return !1;
                      });
                    let y = document.createElement('div');
                    y.className = 'field';
                    let h = document.createElement('label');
                    (h.innerHTML = l), y.appendChild(h), u.appendChild(y);
                    let m = document.createElement('div');
                    for (let t of ((m.className = 'ui hidden message'),
                    (m.id = ''.concat(e.contract, '_').concat(o, 'Msg')),
                    (m.style['word-break'] = 'break-all'),
                    u.appendChild(m),
                    s.inputs)) {
                      let n = document.createElement('div');
                      n.className = 'field';
                      let i = document.createElement('div');
                      (i.className = 'ui labeled input'),
                        (i.innerHTML = '<div class="ui label '
                          .concat(d, ' basic">')
                          .concat(t.type, ':')
                          .concat(t.name, '</div><input type="text" name="')
                          .concat(e.contract, '_')
                          .concat(t.name, '" />')),
                        n.appendChild(i),
                        u.appendChild(n);
                    }
                    if ('payable' === s.stateMutability) {
                      let t = document.createElement('div');
                      t.className = 'field';
                      let n = document.createElement('div');
                      (n.className = 'ui labeled input'),
                        (n.innerHTML = '<div class="ui label '
                          .concat(
                            d,
                            ' basic">Value</div><input type="number" step="0.00000001" name="'
                          )
                          .concat(e.contract, '_')
                          .concat(l, 'value" value="0.00000000" />')),
                        t.appendChild(n),
                        u.appendChild(t);
                    }
                    let x = document.createElement('button');
                    (x.className = 'ui button '.concat(d, ' inverted')),
                      (x.innerHTML = 'Call'),
                      u.appendChild(x),
                      c.appendChild(u),
                      p.appendChild(c),
                      n.appendChild(p),
                      i++;
                  }),
                  i % 2 != 0)
                )
                  for (let e = 0; e < i % 2; e++) {
                    let e = document.createElement('div');
                    (e.className = 'eight wide column stretched'),
                      n.appendChild(e);
                  }
              }
            }
          };
        return (
          m.useEffect(() => {
            n();
          }, []),
          e.abi.length > 0
            ? (0, s.jsxs)(c.Z, {
                children: [
                  (0, s.jsx)(c.Z.Row, {
                    children: (0, s.jsx)(j.Z, {
                      children: ''.concat(e.contract),
                    }),
                  }),
                  (0, s.jsx)(c.Z.Row, {
                    children: (0, s.jsx)(c.Z, {
                      stackable: !0,
                      id: ''.concat(e.contract, 'Functions'),
                    }),
                  }),
                ],
              })
            : (0, s.jsx)('div', {children: 'Error Invalid Contract'})
        );
      }
      function G(e) {
        let [t, n] = m.useState(!1),
          [i, a] = m.useState('0.0'),
          [r, o] = m.useState(BigInt('0')),
          [l, d] = m.useState(BigInt('0')),
          [p, h] = m.useState(BigInt('0'));
        async function x(t, i) {
          let s;
          n(!0);
          let r = new P.vU(M),
            l = r.encodeFunctionData('governors(address)', ['0x'.concat(t)]);
          try {
            let t = await window.metrimask.rpcProvider.rawCall('callcontract', [
                N(i || 'MainNet', 'Governance'),
                l.replace('0x', ''),
              ]),
              n = t.executionResult;
            try {
              s = r.decodeFunctionResult(
                'governors(address)',
                '0x'.concat(n.output)
              );
            } catch (e) {
              s = [n.excepted];
            }
            s = null == s ? void 0 : s.map((e) => BigInt(e.toString()));
            let c = JSON.parse(
                JSON.stringify(
                  await (
                    await fetch(
                      'https://'.concat(
                        'TestNet' === i ? 'testnet-' : '',
                        'explorer.metrixcoin.com/api/info'
                      )
                    )
                  ).json()
                )
              ),
              [p, u, y, m, x] = s;
            c.height ? BigInt(c.height) : BigInt(0),
              BigInt(26880),
              c.height ? BigInt(c.height) : BigInt(0),
              BigInt(26880),
              BigInt(-960),
              p > BigInt(0) &&
                u > BigInt(0) &&
                y > BigInt(0) &&
                (e.setEnrolled(!0),
                o(p),
                d(u),
                h(m),
                a(parseFloat(E(y.toString(), 8)).toLocaleString()));
          } catch (e) {
            console.log(e);
          }
          n(!1);
        }
        let g = async (e, t) => {
          if (
            e.data &&
            e.data.target &&
            e.data.target.startsWith('metrimask') &&
            e.data.message
          )
            switch (e.data.message.type) {
              case 'GET_INPAGE_METRIMASK_ACCOUNT_VALUES':
                console.log('Updating MetriMask context');
                break;
              case 'METRIMASK_ACCOUNT_CHANGED':
                t(e.data.message.payload);
                break;
              case 'METRIMASK_INSTALLED_OR_UPDATED':
                window && window.location.reload();
                break;
              case 'METRIMASK_WINDOW_CLOSE':
                console.log('Canceled!!!'), t();
            }
        };
        function w(t) {
          g(t, (t) => {
            !(function (t) {
              if (void 0 === t) {
                e.setNetwork(void 0),
                  e.setAddress(void 0),
                  e.setConnected(!1),
                  e.setEnrolled(!1);
                return;
              }
              let n = t.account;
              n && n.loggedIn
                ? (e.setAddress((0, R.toHexAddress)(n.address)),
                  x((0, R.toHexAddress)(n.address), n.network),
                  e.setConnected(!0),
                  e.setError(!1),
                  e.setMessage(''))
                : (e.setNetwork(void 0),
                  e.setAddress(void 0),
                  e.setConnected(!1),
                  e.setEnrolled(!1)),
                e.setDebug([
                  (0, s.jsx)(
                    B,
                    {
                      network: e.network ? e.network : 'MainNet',
                      contract: 'Budget',
                      address: N(e.network ? e.network : 'MainNet', 'Budget'),
                      abi: T,
                    },
                    0
                  ),
                  (0, s.jsx)(
                    B,
                    {
                      network: e.network ? e.network : 'MainNet',
                      contract: 'DGP',
                      address: N(e.network ? e.network : 'MainNet', 'DGP'),
                      abi: Z,
                    },
                    1
                  ),
                  (0, s.jsx)(
                    B,
                    {
                      network: e.network ? e.network : 'MainNet',
                      contract: 'Governance',
                      address: N(
                        e.network ? e.network : 'MainNet',
                        'Governance'
                      ),
                      abi: M,
                    },
                    3
                  ),
                ]);
            })(t);
          });
        }
        async function v() {
          if (e.connected && !e.enrolled) {
            let t = new P.vU(M),
              n = t.encodeFunctionData('enroll()', []);
            try {
              let t = await window.metrimask.rpcProvider.rawCall(
                  'sendtocontract',
                  [
                    N(e.network ? e.network : 'MainNet', 'Governance'),
                    n.replace('0x', ''),
                    75e5,
                    25e4,
                    5e3,
                  ]
                ),
                i = JSON.parse(JSON.stringify(t));
              e.setError(void 0 != i.txid),
                e.setMessage(
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(j.Z, {children: 'Response'}),
                      (0, s.jsx)('p', {
                        style: {
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                        },
                        children: i.txid
                          ? (0, s.jsx)('a', {
                              href: "https://${   props.network === 'TestNet' ? 'testnet-' : ''   }explorer.metrixcoin.com/tx/${   response.txid   }",
                              target: '_blank',
                              children: i.txid,
                            })
                          : 'No response',
                      }),
                    ],
                  })
                );
            } catch (n) {
              let t = n.message ? n.message : 'An error occurred';
              e.setError(!0),
                e.setMessage(
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(j.Z, {children: 'Error'}),
                      (0, s.jsx)('p', {
                        style: {
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                        },
                        children: t,
                      }),
                    ],
                  })
                );
            }
          }
        }
        async function f() {
          if (e.connected && e.enrolled) {
            let t = new P.vU(M);
            try {
              let n = t.encodeFunctionData('unenroll(bool)', [!1]),
                i = await window.metrimask.rpcProvider.rawCall(
                  'sendtocontract',
                  [
                    N(e.network ? e.network : 'MainNet', 'Governance'),
                    n.replace('0x', ''),
                    0,
                    25e4,
                    5e3,
                  ]
                ),
                a = JSON.parse(JSON.stringify(i));
              e.setError(void 0 != a.txid),
                e.setMessage(
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(j.Z, {children: 'Response'}),
                      (0, s.jsx)('p', {
                        style: {
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                        },
                        children: a.txid
                          ? (0, s.jsx)('a', {
                              href: "https://${   props.network === 'TestNet' ? 'testnet-' : ''   }explorer.metrixcoin.com/tx/${   response.txid   }",
                              target: '_blank',
                              children: a.txid,
                            })
                          : 'No response',
                      }),
                    ],
                  })
                );
            } catch (n) {
              let t = n.message ? n.message : 'An error occurred';
              e.setError(!0),
                e.setMessage(
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(j.Z, {children: 'Error'}),
                      (0, s.jsx)('p', {
                        style: {
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                        },
                        children: t,
                      }),
                    ],
                  })
                );
            }
          }
        }
        async function b() {
          if (e.connected && e.enrolled) {
            let t = new P.vU(M),
              n = t.encodeFunctionData('ping()', []);
            try {
              let t = await window.metrimask.rpcProvider.rawCall(
                  'sendtocontract',
                  [
                    N(e.network ? e.network : 'MainNet', 'Governance'),
                    n.replace('0x', ''),
                    0,
                    25e4,
                    5e3,
                  ]
                ),
                i = JSON.parse(JSON.stringify(t));
              e.setError(void 0 != i.txid),
                e.setMessage(
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(j.Z, {children: 'Response'}),
                      (0, s.jsx)('p', {
                        style: {
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                        },
                        children: i.txid
                          ? (0, s.jsx)('a', {
                              href: "https://${   props.network === 'TestNet' ? 'testnet-' : ''   }explorer.metrixcoin.com/tx/${   response.txid   }",
                              target: '_blank',
                              children: i.txid,
                            })
                          : 'No response',
                      }),
                    ],
                  })
                );
            } catch (n) {
              let t = n.message ? n.message : 'An error occurred';
              e.setError(!0),
                e.setMessage(
                  (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(j.Z, {children: 'Error'}),
                      (0, s.jsx)('p', {
                        style: {
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          textOverflow: 'ellipsis',
                        },
                        children: t,
                      }),
                    ],
                  })
                );
            }
          }
        }
        return (
          m.useEffect(() => {
            window &&
              (window.metrimask &&
                window.metrimask.account &&
                !0 === window.metrimask.account.loggedIn &&
                (e.setAddress(
                  (0, R.toHexAddress)(window.metrimask.account.address)
                ),
                e.setNetwork(window.metrimask.account.network)),
              window.addEventListener('message', w, !1),
              window.postMessage({message: {type: 'CONNECT_METRIMASK'}}, '*'));
          }, []),
          (0, s.jsxs)(F.Z, {
            fluid: !0,
            style: {padding: '10%'},
            color: e.connected ? (e.enrolled ? 'green' : 'yellow') : 'red',
            children: [
              (0, s.jsx)(F.Z.Header, {
                as: 'h3',
                textAlign: 'center',
                style: {padding: '7px'},
                children: t
                  ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(y.Z, {
                          loading: !0,
                          name: 'cog',
                          size: 'big',
                        }),
                        ' Loading',
                      ],
                    })
                  : e.connected
                  ? e.enrolled
                    ? (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(y.Z, {
                            name: 'check circle outline',
                            size: 'big',
                            color: 'green',
                          }),
                          ' ',
                          'Enrolled',
                        ],
                      })
                    : (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(y.Z, {
                            name: 'times circle outline',
                            size: 'big',
                            color: 'yellow',
                          }),
                          ' Not Enrolled',
                        ],
                      })
                  : (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(y.Z, {
                          name: 'unlink',
                          size: 'big',
                          color: 'red',
                        }),
                        ' Not Connected',
                      ],
                    }),
              }),
              (0, s.jsx)(F.Z.Meta, {
                textAlign: 'center',
                children: t
                  ? ''
                  : e.connected
                  ? e.enrolled
                    ? (0, s.jsxs)(c.Z, {
                        container: !0,
                        padded: !0,
                        textAlign: 'center',
                        children: [
                          (0, s.jsx)(c.Z.Row, {stretched: !0}),
                          (0, s.jsx)(c.Z.Row, {
                            stretched: !0,
                            children: (0, s.jsxs)(j.Z, {
                              as: 'h4',
                              children: [
                                'Enrollment:',
                                ' ',
                                (0, s.jsx)('a', {
                                  href: 'https://'
                                    .concat(
                                      'TestNet' === e.network ? 'testnet-' : '',
                                      'explorer.metrixcoin.com/block/'
                                    )
                                    .concat(r.toString()),
                                  target: '_blank',
                                  children: r.toString(),
                                }),
                              ],
                            }),
                          }),
                          (0, s.jsx)(c.Z.Row, {
                            stretched: !0,
                            children: (0, s.jsxs)(j.Z, {
                              as: 'h4',
                              children: ['Collateral: ', i, ' MRX'],
                            }),
                          }),
                        ],
                      })
                    : (0, s.jsx)(c.Z, {
                        container: !0,
                        padded: !0,
                        textAlign: 'center',
                        children: (0, s.jsx)(c.Z.Row, {
                          stretched: !0,
                          children: (0, s.jsx)(j.Z, {
                            as: 'h4',
                            children:
                              'Paticipating in the DGP requires 7.5 million MRX to be locked as collateral.',
                          }),
                        }),
                      })
                  : (0, s.jsx)(c.Z, {
                      container: !0,
                      padded: !0,
                      textAlign: 'center',
                      children: (0, s.jsx)(c.Z.Row, {
                        stretched: !0,
                        children: (0, s.jsx)(j.Z, {
                          as: 'h4',
                          children: 'No Metrix Web3 wallet connected.',
                        }),
                      }),
                    }),
              }),
              (0, s.jsx)(F.Z.Description, {
                textAlign: 'center',
                children: t
                  ? ''
                  : e.connected
                  ? e.enrolled
                    ? (0, s.jsxs)(c.Z, {
                        container: !0,
                        padded: !0,
                        textAlign: 'center',
                        children: [
                          (0, s.jsx)(c.Z.Row, {
                            stretched: !0,
                            children: (0, s.jsxs)(j.Z, {
                              as: 'h4',
                              children: [
                                'Last Ping:',
                                ' ',
                                (0, s.jsx)('a', {
                                  href: 'https://'
                                    .concat(
                                      'TestNet' === e.network ? 'testnet-' : '',
                                      'explorer.metrixcoin.com/block/'
                                    )
                                    .concat(l.toString()),
                                  target: '_blank',
                                  children: l.toString(),
                                }),
                              ],
                            }),
                          }),
                          (0, s.jsx)(c.Z.Row, {
                            stretched: !0,
                            children: (0, s.jsxs)(j.Z, {
                              as: 'h4',
                              children: [
                                'Last Reward:',
                                ' ',
                                p > BigInt(0)
                                  ? (0, s.jsx)('a', {
                                      href: 'https://'
                                        .concat(
                                          'TestNet' === e.network
                                            ? 'testnet-'
                                            : '',
                                          'explorer.metrixcoin.com/block/'
                                        )
                                        .concat(p.toString()),
                                      target: '_blank',
                                      children: p.toString(),
                                    })
                                  : 'Never',
                              ],
                            }),
                          }),
                        ],
                      })
                    : (0, s.jsx)(c.Z, {
                        container: !0,
                        padded: !0,
                        textAlign: 'center',
                        children: (0, s.jsx)(c.Z.Row, {
                          stretched: !0,
                          children: (0, s.jsx)(j.Z, {
                            as: 'h4',
                            children: 'Enroll as a governor to continue.',
                          }),
                        }),
                      })
                  : (0, s.jsx)(c.Z, {
                      container: !0,
                      padded: !0,
                      textAlign: 'center',
                      children: (0, s.jsx)(c.Z.Row, {
                        stretched: !0,
                        children: (0, s.jsx)(j.Z, {
                          as: 'h4',
                          children:
                            'Install and connect a Metrix compatible Web3 wallet to get started.',
                        }),
                      }),
                    }),
              }),
              (0, s.jsx)(F.Z.Content, {
                extra: !0,
                children: (0, s.jsx)(c.Z, {
                  container: !0,
                  padded: !0,
                  children: t
                    ? ''
                    : e.connected
                    ? e.enrolled
                      ? (0, s.jsx)(c.Z.Row, {
                          stretched: !0,
                          children: (0, s.jsxs)(u.Z.Group, {
                            widths: '4',
                            children: [
                              (0, s.jsx)(u.Z, {
                                inverted: !0,
                                color: 'red',
                                content: 'Unenroll',
                                compact: !0,
                                style: {marginRight: '2px'},
                                className: 'change',
                                size: 'large',
                                onClick: () => f(),
                              }),
                              (0, s.jsx)(u.Z, {
                                inverted: !0,
                                color: 'green',
                                content: 'Ping',
                                compact: !0,
                                style: {marginLeft: '2px'},
                                size: 'large',
                                onClick: () => b(),
                              }),
                            ],
                          }),
                        })
                      : (0, s.jsx)(c.Z.Row, {
                          stretched: !0,
                          columns: '1',
                          children: (0, s.jsx)(u.Z, {
                            inverted: !0,
                            color: 'green',
                            content: 'Enroll',
                            fluid: !0,
                            size: 'large',
                            onClick: () => v(),
                          }),
                        })
                    : (0, s.jsx)(c.Z.Row, {
                        stretched: !0,
                        children: (0, s.jsx)(c.Z.Column, {
                          stretched: !0,
                          textAlign: 'center',
                          children: (0, s.jsxs)('a', {
                            href: 'https://chrome.google.com/webstore/detail/metrimask/pgjlaaokfffcapdcakncnhpmigjlnpei',
                            target: '_blank',
                            children: [
                              (0, s.jsx)(y.Z, {name: 'chrome'}),
                              'MetriMask for Chrome (Desktop)',
                            ],
                          }),
                        }),
                      }),
                }),
              }),
            ],
          })
        );
      }
      var I = n(25552),
        L = n(60416),
        D = n(416),
        O = n(63272),
        H = n(20370),
        U = n(30711);
      function z(e) {
        let [t, n] = m.useState(''),
          [i, r] = m.useState(''),
          [o, d] = m.useState(''),
          [y, h] = m.useState(BigInt('0')),
          [x, g] = m.useState(0),
          w = (0, s.jsx)(s.Fragment, {
            children: (0, s.jsxs)(I.Z, {
              children: [
                (0, s.jsxs)(I.Z.Field, {
                  required: !0,
                  children: [
                    (0, s.jsx)('label', {children: 'Title'}),
                    (0, s.jsx)(L.Z, {
                      type: 'text',
                      fluid: !0,
                      placeholder: 'Title for proposal',
                      onChange: (e, t) => {
                        n(t.value ? t.value : '');
                      },
                    }),
                  ],
                }),
                (0, s.jsxs)(I.Z.Field, {
                  required: !0,
                  children: [
                    (0, s.jsx)('label', {children: 'Description'}),
                    (0, s.jsx)(D.Z, {
                      placeholder: 'A description of the proposal',
                      rows: 6,
                      onChange: (e, t) => {
                        r(t.value ? ''.concat(t.value) : '');
                      },
                    }),
                  ],
                }),
                (0, s.jsxs)(I.Z.Field, {
                  required: !0,
                  children: [
                    (0, s.jsx)('label', {children: 'URL'}),
                    (0, s.jsx)(L.Z, {
                      type: 'text',
                      fluid: !0,
                      placeholder: 'URL to a webpage about the proposal',
                      onChange: (e, t) => {
                        d(t.value ? t.value : '');
                      },
                    }),
                  ],
                }),
                (0, s.jsxs)(I.Z.Field, {
                  required: !0,
                  children: [
                    (0, s.jsx)('label', {children: 'Requested'}),
                    (0, s.jsx)(L.Z, {
                      type: 'number',
                      fluid: !0,
                      placeholder: 'Amount of MRX requested',
                      min: 0,
                      onChange: (e, t) => {
                        h(t.value ? BigInt(A(t.value)) : BigInt('0'));
                      },
                    }),
                  ],
                }),
                (0, s.jsxs)(I.Z.Field, {
                  required: !0,
                  children: [
                    (0, s.jsx)('label', {children: 'Duration in months'}),
                    (0, s.jsx)(L.Z, {
                      type: 'number',
                      fluid: !0,
                      placeholder: 'How many months to receive the MRX funds',
                      min: 1,
                      max: 12,
                      onChange: (e, t) => {
                        g(t.value ? Number(t.value) : 0);
                      },
                    }),
                  ],
                }),
              ],
            }),
          }),
          [v, f] = m.useState(a.GAS_SCHEDULE),
          [b, M] = m.useState(''),
          k = (0, s.jsx)(s.Fragment, {
            children: (0, s.jsxs)(I.Z, {
              children: [
                (0, s.jsxs)(I.Z.Field, {
                  required: !0,
                  children: [
                    (0, s.jsx)('label', {children: 'DGP Proposal Type'}),
                    (0, s.jsx)(O.Z, {
                      fluid: !0,
                      children: (0, s.jsx)(H.Z, {
                        defaultValue: 1,
                        options: [
                          {key: 1, text: 'Gas Schedule', value: 1},
                          {key: 2, text: 'Block Size', value: 2},
                          {key: 3, text: 'Min Gas Price', value: 3},
                          {key: 4, text: 'Block Gas Limit', value: 4},
                          {key: 5, text: 'Tx Fee Rates', value: 5},
                          {key: 6, text: 'Collateral', value: 6},
                          {key: 7, text: 'Budget Fee', value: 7},
                        ],
                        item: !0,
                        fluid: !0,
                        inline: !0,
                        selection: !0,
                        onChange: (e, t) => {
                          f(t.value);
                        },
                      }),
                    }),
                  ],
                }),
                (0, s.jsxs)(I.Z.Field, {
                  required: !0,
                  children: [
                    (0, s.jsx)('label', {children: 'Proposed Address'}),
                    (0, s.jsx)(L.Z, {
                      type: 'text',
                      fluid: !0,
                      placeholder: 'Contract Address',
                      onChange: (e, t) => {
                        M(t.value ? ''.concat(t.value) : '');
                      },
                    }),
                  ],
                }),
              ],
            }),
          }),
          [C, S] = m.useState(!1),
          [E, F] = m.useState('budget'),
          [_, B] = m.useState(w),
          [G, z] = m.useState(!1),
          [J, q] = m.useState('');
        async function V() {
          switch (E) {
            case 'budget': {
              if (
                !t ||
                0 == t.length ||
                !i ||
                0 == i.length ||
                !o ||
                0 == o.length
              ) {
                z(!0),
                  q(
                    (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(j.Z, {children: 'Error'}),
                        (0, s.jsx)('p', {
                          children:
                            'Invalid arguments to create a Budget proposal. Check the inputs are correct.',
                        }),
                      ],
                    })
                  );
                return;
              }
              let n = new P.vU(T);
              try {
                let a = n.encodeFunctionData(
                    'startProposal(string, string, string, uint256, uint8)',
                    [
                      t,
                      i,
                      o,
                      '0x'.concat(y.toString(16)),
                      '0x'.concat(BigInt(x).toString(16)),
                    ]
                  ),
                  r = await window.metrimask.rpcProvider.rawCall(
                    'sendtocontract',
                    [
                      N(e.network ? e.network : 'MainNet', 'Budget'),
                      a.replace('0x', ''),
                      0,
                      25e4,
                      5e3,
                    ]
                  ),
                  l = JSON.parse(JSON.stringify(r));
                z(void 0 != l.txid),
                  q(
                    (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(j.Z, {children: 'Response'}),
                        (0, s.jsx)('p', {
                          style: {
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                          },
                          children: l.txid
                            ? (0, s.jsx)('a', {
                                href: "https://${   props.network === 'TestNet' ? 'testnet-' : ''   }explorer.metrixcoin.com/tx/${   response.txid   }",
                                target: '_blank',
                                children: l.txid,
                              })
                            : 'No response',
                        }),
                      ],
                    })
                  );
              } catch (t) {
                let e = t.message ? t.message : 'An error occurred';
                z(!0),
                  q(
                    (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(j.Z, {children: 'Error'}),
                        (0, s.jsx)('p', {
                          style: {
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                          },
                          children: e,
                        }),
                      ],
                    })
                  );
                return;
              }
            }
            case 'dgp': {
              if (
                !b.match(R.EthereumAddressRegex) &&
                !b.match(R.HexAddressRegex)
              ) {
                console.log(
                  'propType:'.concat(v),
                  'proposalAddress:'.concat(b)
                ),
                  z(!0),
                  q(
                    (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(j.Z, {children: 'Error'}),
                        (0, s.jsx)('p', {
                          children:
                            'Invalid arguments to create a DGP proposal. Check the inputs are correct.',
                        }),
                      ],
                    })
                  );
                return;
              }
              let t = new P.vU(Z);
              try {
                let n = t.encodeFunctionData('addProposal(uint8,address)', [
                    '0x'.concat(BigInt(v)),
                    b.startsWith('0x') ? b : '0x'.concat(b),
                  ]),
                  i = await window.metrimask.rpcProvider.rawCall(
                    'sendtocontract',
                    [
                      N(e.network ? e.network : 'MainNet', 'Budget'),
                      n.replace('0x', ''),
                      0,
                      25e4,
                      5e3,
                    ]
                  ),
                  a = JSON.parse(JSON.stringify(i));
                z(void 0 != a.txid),
                  q(
                    (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(j.Z, {children: 'Response'}),
                        (0, s.jsx)('p', {
                          style: {
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                          },
                          children: a.txid
                            ? (0, s.jsx)('a', {
                                href: "https://${   props.network === 'TestNet' ? 'testnet-' : ''   }explorer.metrixcoin.com/tx/${   response.txid   }",
                                target: '_blank',
                                children: a.txid,
                              })
                            : 'No response',
                        }),
                      ],
                    })
                  );
              } catch (t) {
                let e = t.message ? t.message : 'An error occurred';
                z(!0),
                  q(
                    (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(j.Z, {children: 'Error'}),
                        (0, s.jsx)('p', {
                          style: {
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                          },
                          children: e,
                        }),
                      ],
                    })
                  );
              }
              return;
            }
            default:
              return !1;
          }
        }
        return (0, s.jsx)(U.Z, {
          onClose: () => S(!1),
          onOpen: () => S(!0),
          open: C,
          trigger: e.trigger,
          children: (0, s.jsxs)(l.Z, {
            className: 'darkModal',
            style: {padding: '12px'},
            children: [
              (0, s.jsx)(U.Z.Header, {
                as: 'h2',
                children: 'Create New Proposal',
              }),
              (0, s.jsxs)(U.Z.Content, {
                style: {color: 'black'},
                children: [
                  (0, s.jsx)(U.Z.Description, {
                    children: (0, s.jsx)(l.Z, {
                      children: (0, s.jsxs)(c.Z, {
                        padded: !0,
                        children: [
                          (0, s.jsx)(c.Z.Row, {
                            stretched: !0,
                            children: (0, s.jsx)(c.Z.Column, {
                              stretched: !0,
                              children: (0, s.jsx)(I.Z, {
                                children: (0, s.jsxs)(I.Z.Field, {
                                  required: !0,
                                  children: [
                                    (0, s.jsx)('label', {
                                      children: 'Proposal Type',
                                    }),
                                    (0, s.jsx)(O.Z, {
                                      fluid: !0,
                                      children: (0, s.jsx)(H.Z, {
                                        defaultValue: 'budget',
                                        options: [
                                          {
                                            key: 1,
                                            text: 'Budget',
                                            value: 'budget',
                                          },
                                          {key: 2, text: 'DGP', value: 'dgp'},
                                        ],
                                        item: !0,
                                        fluid: !0,
                                        selection: !0,
                                        inline: !0,
                                        onChange: (e, t) => {
                                          var n;
                                          (n = t.value),
                                            q(''),
                                            'dgp' === n
                                              ? (B(k), F(n))
                                              : 'budget' === n && (B(w), F(n));
                                        },
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                          (0, s.jsx)(c.Z.Row, {
                            children: (0, s.jsx)(c.Z.Column, {children: _}),
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, s.jsx)(p.Z, {
                    hidden: !J,
                    error: G,
                    success: !G,
                    children: J,
                  }),
                ],
              }),
              (0, s.jsxs)(U.Z.Actions, {
                children: [
                  (0, s.jsx)('br', {}),
                  (0, s.jsx)(u.Z, {
                    color: 'red',
                    onClick: () => {
                      F('budget'),
                        B(w),
                        q(''),
                        z(!1),
                        n(''),
                        r(''),
                        d(''),
                        h(BigInt('0')),
                        g(0),
                        f(a.GAS_SCHEDULE),
                        M(''),
                        S(!1);
                    },
                    inverted: !0,
                    size: 'large',
                    children: 'Cancel',
                  }),
                  (0, s.jsx)(u.Z, {
                    color: 'green',
                    onClick: () => V(),
                    inverted: !0,
                    size: 'large',
                    children: 'Create Proposal',
                  }),
                ],
              }),
            ],
          }),
        });
      }
      ((i = a || (a = {}))[(i.GAS_SCHEDULE = 1)] = 'GAS_SCHEDULE'),
        (i[(i.BLOCK_SIZE = 2)] = 'BLOCK_SIZE'),
        (i[(i.MIN_GAS_PRICE = 3)] = 'MIN_GAS_PRICE'),
        (i[(i.BLOCK_GAS_LIMIT = 4)] = 'BLOCK_GAS_LIMIT'),
        (i[(i.TX_FEE_RATES = 5)] = 'TX_FEE_RATES'),
        (i[(i.COLLATERAL = 6)] = 'COLLATERAL'),
        (i[(i.BUDGET_FEE = 7)] = 'BUDGET_FEE');
      var J = n(30919);
      function q(e) {
        return (0, s.jsxs)(J.Z, {
          children: [
            (0, s.jsx)(J.Z.Title, {
              active: e.debugging,
              onClick: () => e.setDebugging(!e.debugging),
              children: (0, s.jsxs)(j.Z, {
                as: 'h3',
                children: [
                  (0, s.jsx)(y.Z, {name: 'dropdown'}),
                  'Debug Contacts',
                ],
              }),
            }),
            (0, s.jsx)(J.Z.Content, {
              active: e.debugging && e.connected,
              children: e.debug,
            }),
          ],
        });
      }
      var V = n(67169);
      function $(e) {
        let [t, n] = m.useState([]);
        async function i(t, n) {
          let i = new P.vU(T);
          try {
            let a = i.encodeFunctionData('voteForProposal(uint8,uint8)', [
                t,
                n,
              ]),
              r = await window.metrimask.rpcProvider.rawCall('sendtocontract', [
                N(e.network ? e.network : 'MainNet', 'Budget'),
                a.replace('0x', ''),
                0,
                25e4,
                5e3,
              ]),
              o = JSON.parse(JSON.stringify(r));
            e.setError(void 0 != o.txid),
              e.setMessage(
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(j.Z, {children: 'Response'}),
                    (0, s.jsx)('p', {
                      style: {
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                      },
                      children: o.txid
                        ? (0, s.jsx)('a', {
                            href: "https://${   props.network === 'TestNet' ? 'testnet-' : ''   }explorer.metrixcoin.com/tx/${   response.txid   }",
                            target: '_blank',
                            children: o.txid,
                          })
                        : 'No response',
                    }),
                  ],
                })
              );
          } catch (n) {
            let t = n.message ? n.message : 'An error occurred';
            e.setError(!0),
              e.setMessage(
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(j.Z, {children: 'Error'}),
                    (0, s.jsx)('p', {
                      style: {
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        textOverflow: 'ellipsis',
                      },
                      children: t,
                    }),
                  ],
                })
              );
          }
        }
        let a = async () => {
          let t = [];
          new P.vU(T);
          let a = e.network ? e.network : 'MainNet',
            r = new V.APIProvider(a),
            o = await r.callContract(N(a, 'Budget'), 'proposalCount()', [], T),
            l = BigInt(o ? o.toString() : 0);
          for (let e = BigInt(0); e < l; e++) {
            let n = await r.callContract(
              N(a, 'Budget'),
              'proposals(uint256)',
              ['0x'.concat(e.toString(16))],
              T
            );
            if (n) {
              let [e, a, r, o, l, c, d, p, h, m, x] = n.map((e) =>
                  ''.concat(e)
                ),
                g = (0, s.jsxs)(
                  F.Z,
                  {
                    fluid: !0,
                    children: [
                      (0, s.jsxs)(F.Z.Content, {
                        children: [
                          (0, s.jsx)(F.Z.Header, {
                            children: (0, s.jsx)('strong', {children: r}),
                          }),
                          (0, s.jsxs)(F.Z.Meta, {
                            children: [
                              (0, s.jsx)('div', {children: o}),
                              (0, s.jsxs)('div', {
                                style: {
                                  overflow: 'hidden',
                                  whiteSpace: 'nowrap',
                                  textOverflow: 'ellipsis',
                                },
                                children: [
                                  'Amount:',
                                  ' ',
                                  parseFloat(E(c, 8)).toLocaleString(),
                                  ' ',
                                  'MRX',
                                ],
                              }),
                              (0, s.jsxs)('div', {
                                style: {
                                  overflow: 'hidden',
                                  whiteSpace: 'nowrap',
                                  textOverflow: 'ellipsis',
                                },
                                children: [
                                  'Owner: ',
                                  a.replace('0x', '').toLowerCase(),
                                ],
                              }),
                              (0, s.jsx)('div', {
                                style: {
                                  overflow: 'hidden',
                                  whiteSpace: 'nowrap',
                                  textOverflow: 'ellipsis',
                                },
                                children: (0, s.jsx)('a', {
                                  href: ''.concat(l),
                                  target: '_blank',
                                  style: {
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                  },
                                  children: l,
                                }),
                              }),
                            ],
                          }),
                          (0, s.jsxs)('div', {
                            children: [
                              (0, s.jsxs)('span', {
                                children: ['Yes: ', h, '\xa0\xa0\xa0'],
                              }),
                              (0, s.jsxs)('span', {
                                children: ['No: ', m, '\xa0\xa0\xa0'],
                              }),
                            ],
                          }),
                          (0, s.jsxs)(F.Z.Description, {
                            children: [
                              (0, s.jsxs)('div', {children: ['Duration: ', d]}),
                              (0, s.jsxs)('div', {
                                children: ['Durations Paid: ', p],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)(F.Z.Content, {
                        extra: !0,
                        children: (0, s.jsxs)(u.Z.Group, {
                          fluid: !0,
                          children: [
                            (0, s.jsxs)(u.Z, {
                              inverted: !0,
                              color: 'green',
                              icon: !0,
                              style: {marginRight: '2px'},
                              size: 'large',
                              onClick: () =>
                                i(
                                  '0x'.concat(BigInt(e).toString(16)),
                                  '0x'.concat(BigInt(3).toString(16))
                                ),
                              children: [
                                (0, s.jsx)(y.Z, {name: 'thumbs up outline'}),
                                'Yes',
                              ],
                            }),
                            (0, s.jsxs)(u.Z, {
                              inverted: !0,
                              color: 'blue',
                              icon: !0,
                              style: {marginRight: '2px', marginLeft: '2px'},
                              size: 'large',
                              onClick: () =>
                                i(
                                  '0x'.concat(BigInt(e).toString(16)),
                                  '0x'.concat(BigInt(1).toString(16))
                                ),
                              children: [
                                (0, s.jsx)(y.Z, {name: 'hand peace outline'}),
                                'Abstain',
                              ],
                            }),
                            (0, s.jsxs)(u.Z, {
                              inverted: !0,
                              color: 'red',
                              icon: !0,
                              style: {marginLeft: '2px'},
                              size: 'large',
                              onClick: () =>
                                i(
                                  '0x'.concat(BigInt(e).toString(16)),
                                  '0x'.concat(BigInt(2).toString(16))
                                ),
                              children: [
                                (0, s.jsx)(y.Z, {name: 'thumbs down outline'}),
                                'No',
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  },
                  'card'.concat(e)
                );
              t.push(g);
            }
          }
          n(t);
        };
        return (
          m.useEffect(() => {
            window && a();
          }, []),
          (0, s.jsx)(l.Z, {
            children: (0, s.jsxs)(f.Z, {
              style: {
                maxHeight: '35vh',
                minHeight: '25vh',
                overflowY: 'scroll',
              },
              children: [
                (0, s.jsx)(j.Z, {as: 'h2', children: 'Proposals'}),
                ...t,
              ],
            }),
          })
        );
      }
      function X() {
        let [e, t] = m.useState(!1),
          [n, i] = m.useState(!1),
          [a, r] = m.useState(!1),
          [x, w] = m.useState(void 0),
          [f, j] = m.useState(void 0),
          [T, Z] = m.useState(!1),
          [M, k] = m.useState(''),
          [C, S] = m.useState([]);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(o(), {
              children: [
                (0, s.jsx)('title', {children: 'Metrix DGP'}),
                (0, s.jsx)('meta', {
                  name: 'description',
                  content: 'A web3 based governance dapp',
                }),
                (0, s.jsx)('meta', {
                  name: 'viewport',
                  content: 'width=device-width, initial-scale=1',
                }),
                (0, s.jsx)('link', {rel: 'icon', href: '/favicon.png'}),
              ],
            }),
            (0, s.jsx)('main', {
              className: g().main,
              children: (0, s.jsx)(l.Z, {
                children: (0, s.jsxs)(c.Z, {
                  padded: !0,
                  stackable: !0,
                  stretched: !0,
                  container: !0,
                  children: [
                    (0, s.jsxs)(c.Z.Row, {
                      stretched: !0,
                      children: [
                        (0, s.jsx)(c.Z.Column, {
                          width: '6',
                          children: (0, s.jsxs)(h.Z, {
                            icon: !0,
                            children: [
                              (0, s.jsx)(d.Z, {
                                style: {width: '64px', height: '64px'},
                                src: 'https://thelindaprojectinc.github.io/Budget-Proposals/images/logo.png',
                                alt: 'logo',
                              }),
                              (0, s.jsx)(h.Z.Content, {
                                as: 'h1',
                                children: 'Metrix DGP',
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsx)(c.Z.Column, {width: '10'}),
                      ],
                    }),
                    (0, s.jsx)(c.Z.Row, {
                      stretched: !0,
                      children: (0, s.jsx)(c.Z, {
                        padded: !0,
                        stackable: !0,
                        children: (0, s.jsxs)(c.Z.Row, {
                          children: [
                            (0, s.jsx)(c.Z.Column, {
                              width: '6',
                              stretched: !0,
                              children: (0, s.jsx)(G, {
                                network: x,
                                setNetwork: w,
                                connected: a,
                                setConnected: r,
                                address: f,
                                setAddress: j,
                                enrolled: n,
                                setEnrolled: i,
                                setDebug: S,
                                setError: Z,
                                setMessage: k,
                              }),
                            }),
                            (0, s.jsx)(c.Z.Column, {
                              width: '9',
                              stretched: !0,
                              children: (0, s.jsx)(b, {}),
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, s.jsx)(c.Z.Row, {
                      stretched: !0,
                      children: (0, s.jsx)(c.Z.Column, {
                        stretched: !0,
                        width: '16',
                        children: (0, s.jsx)(p.Z, {
                          hidden: !M,
                          error: T,
                          success: !T,
                          children: M,
                        }),
                      }),
                    }),
                    (0, s.jsxs)(c.Z.Row, {
                      stretched: !0,
                      columns: 'equal',
                      children: [
                        (0, s.jsx)(c.Z.Column, {}),
                        (0, s.jsx)(c.Z.Column, {
                          children:
                            a && n
                              ? (0, s.jsx)(z, {
                                  network: x,
                                  trigger: (0, s.jsxs)(u.Z, {
                                    color: 'green',
                                    inverted: !0,
                                    icon: !0,
                                    size: 'large',
                                    children: [
                                      (0, s.jsx)(y.Z, {name: 'edit outline'}),
                                      'Create New Proposal',
                                    ],
                                  }),
                                })
                              : '',
                        }),
                        (0, s.jsx)(c.Z.Column, {}),
                      ],
                    }),
                    (0, s.jsx)(c.Z.Row, {
                      stretched: !0,
                      children: (0, s.jsx)(c.Z.Column, {
                        stretched: !0,
                        width: '16',
                        children: (0, s.jsx)($, {
                          network: x,
                          connected: a,
                          enrolled: n,
                          setError: Z,
                          setMessage: k,
                        }),
                      }),
                    }),
                    (0, s.jsx)(c.Z.Row, {
                      stretched: !0,
                      children: (0, s.jsx)(c.Z.Column, {
                        width: '16',
                        children: (0, s.jsx)(q, {
                          connected: a,
                          debug: C,
                          debugging: e,
                          setDebugging: t,
                        }),
                      }),
                    }),
                    (0, s.jsx)(c.Z.Row, {
                      stretched: !0,
                      children: (0, s.jsx)(c.Z.Column, {
                        stretched: !0,
                        children: (0, s.jsx)(v, {}),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
    },
    64265: function (e) {
      e.exports = {main: 'Home_main__EtNt2'};
    },
    69159: function () {},
    47444: function () {},
    58359: function () {},
    98137: function () {},
    74656: function () {},
    93739: function () {},
  },
  function (e) {
    e.O(0, [714, 198, 774, 888, 179], function () {
      return e((e.s = 48312));
    }),
      (_N_E = e.O());
  },
]);
