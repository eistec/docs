var group__net__sixlowpan__types =
[
    [ "sys/net/include/sixlowpan/types.h", "sys_2net_2include_2sixlowpan_2types_8h.html", null ],
    [ "ieee_802154_long_t", "unionieee__802154__long__t.html", [
      [ "uint16", "unionieee__802154__long__t.html#a0f103a981f64759a01f58eb98e8e3129", null ],
      [ "uint8", "unionieee__802154__long__t.html#a7c937dc9014dd94398299dd772c35a83", null ]
    ] ],
    [ "ieee_802154_short_t", "unionieee__802154__short__t.html", [
      [ "uint16", "unionieee__802154__short__t.html#a304743890a7aa1c2a83ad5ab116f7476", null ],
      [ "uint8", "unionieee__802154__short__t.html#aaeb5d31e7ae88cef8662c920f0e8ee83", null ]
    ] ],
    [ "ipv6_addr_t", "unionipv6__addr__t.html", [
      [ "uint16", "unionipv6__addr__t.html#ae414bc8c29c847e37df110b3dce66a6f", null ],
      [ "uint32", "unionipv6__addr__t.html#a3769638b17ede88e5a32a4d076510a14", null ],
      [ "uint8", "unionipv6__addr__t.html#af797f1ec35d499ec53f994223fb6bfb0", null ]
    ] ],
    [ "ipv6_hdr_t", "structipv6__hdr__t.html", [
      [ "destaddr", "structipv6__hdr__t.html#a6c0e6edce4e5f3b7e0a5aae7c1447a0a", null ],
      [ "flowlabel", "structipv6__hdr__t.html#acb7544517c9d8925819f4a1542ef6984", null ],
      [ "hoplimit", "structipv6__hdr__t.html#a1203ef78c299b0b5aeb5f14474e74a72", null ],
      [ "length", "structipv6__hdr__t.html#a07f0169e85bf838214b331863e51cf18", null ],
      [ "nextheader", "structipv6__hdr__t.html#a13a68c64091abaccbc8dab57755a1f8e", null ],
      [ "srcaddr", "structipv6__hdr__t.html#a40a051638cdcaff895023f567007ca07", null ],
      [ "trafficclass_flowlabel", "structipv6__hdr__t.html#a9f92df807ec0a1c03255e699599a1b20", null ],
      [ "version_trafficclass", "structipv6__hdr__t.html#a7c5d58fb6c327a3dc143ef77758a9f7d", null ]
    ] ],
    [ "ipv6_srh_t", "structipv6__srh__t.html", [
      [ "cmpre", "structipv6__srh__t.html#a80a7037f8e88e582d2c41c5cc3bb8ca3", null ],
      [ "cmpri", "structipv6__srh__t.html#aa0d4694e7c575be875fafd8e56a6d4b2", null ],
      [ "hdrextlen", "structipv6__srh__t.html#a616492c5f2dc0d540d2e6ff1144053ab", null ],
      [ "nextheader", "structipv6__srh__t.html#af326693f7dfe39aabd22e2842834b312", null ],
      [ "pad", "structipv6__srh__t.html#aaf6786508474a665eef0823e387fcda0", null ],
      [ "reserved", "structipv6__srh__t.html#afae7907261b29930d0e32f82c0d9a919", null ],
      [ "reserved2", "structipv6__srh__t.html#a0c4302d21b495e928e5b6c45fd0adfff", null ],
      [ "route", "structipv6__srh__t.html#a0297a82bffefc627e5736e3d1352b723", null ],
      [ "routing_type", "structipv6__srh__t.html#a7a73b3b40a55d201df9eb41dba49d071", null ],
      [ "segments_left", "structipv6__srh__t.html#a580f970e50f9c210cebec48fe26f4490", null ]
    ] ],
    [ "icmpv6_hdr_t", "structicmpv6__hdr__t.html", [
      [ "checksum", "structicmpv6__hdr__t.html#aed9090d0919316634e884c6849d88b2a", null ],
      [ "code", "structicmpv6__hdr__t.html#ae8a0653604d9cb55be03dcf20d0c8c38", null ],
      [ "type", "structicmpv6__hdr__t.html#abc50268dd5fba39a0411fe2ae1da2076", null ]
    ] ],
    [ "icmpv6_parameter_prob_hdr_t", "structicmpv6__parameter__prob__hdr__t.html", [
      [ "pointer", "structicmpv6__parameter__prob__hdr__t.html#a48fdf68355881a0c26b2d822d19ec061", null ]
    ] ],
    [ "icmpv6_echo_request_hdr_t", "structicmpv6__echo__request__hdr__t.html", [
      [ "id", "structicmpv6__echo__request__hdr__t.html#a15145cd736a1b813ddc57999f1da36de", null ],
      [ "seq", "structicmpv6__echo__request__hdr__t.html#aca2df94ae571f8cd9b33b9b0978ebdb6", null ]
    ] ],
    [ "icmpv6_echo_reply_hdr_t", "structicmpv6__echo__reply__hdr__t.html", [
      [ "id", "structicmpv6__echo__reply__hdr__t.html#aab1bb256cd53c81125c409c2897a7f61", null ],
      [ "seq", "structicmpv6__echo__reply__hdr__t.html#aabd1ec99fc0f27640b9ef855b6520be0", null ]
    ] ],
    [ "icmpv6_router_adv_hdr_t", "structicmpv6__router__adv__hdr__t.html", [
      [ "autoconfig_flags", "structicmpv6__router__adv__hdr__t.html#aac599990ce6e1b00622c6ed435745e28", null ],
      [ "hoplimit", "structicmpv6__router__adv__hdr__t.html#a420a4fa133afc3e8e90763239c043c47", null ],
      [ "reachable_time", "structicmpv6__router__adv__hdr__t.html#a17a61404ff2a1af1b6a7b929d6a6ed41", null ],
      [ "retrans_timer", "structicmpv6__router__adv__hdr__t.html#acba70cbf4485287a1ab38fde43efe2e6", null ],
      [ "router_lifetime", "structicmpv6__router__adv__hdr__t.html#abf9adf37830ae5c38b667410a218460e", null ]
    ] ],
    [ "icmpv6_neighbor_sol_hdr_t", "structicmpv6__neighbor__sol__hdr__t.html", [
      [ "reserved", "structicmpv6__neighbor__sol__hdr__t.html#ab4b7b7637bb9768645cbabb7f48da9d9", null ],
      [ "target_addr", "structicmpv6__neighbor__sol__hdr__t.html#a0df88ebf1fb18016c8fbe0dcd44f3cb4", null ]
    ] ],
    [ "icmpv6_neighbor_adv_hdr_t", "structicmpv6__neighbor__adv__hdr__t.html", [
      [ "reserved", "structicmpv6__neighbor__adv__hdr__t.html#a7f520d7d4c893c3845a1e0b5bfd32d24", null ],
      [ "rso", "structicmpv6__neighbor__adv__hdr__t.html#adc8b16cc7c9cac0610d303d76655c7f8", null ],
      [ "target_addr", "structicmpv6__neighbor__adv__hdr__t.html#a9ff81b0d879c558d241adcdfca7e74c9", null ]
    ] ],
    [ "icmpv6_ndp_opt_hdr_t", "structicmpv6__ndp__opt__hdr__t.html", [
      [ "length", "structicmpv6__ndp__opt__hdr__t.html#a79778b2a27fd18e743c59d5449166928", null ],
      [ "type", "structicmpv6__ndp__opt__hdr__t.html#a44b1a8b4aaeebf1ce17c73520298e73e", null ]
    ] ],
    [ "icmpv6_ndp_opt_stllao_t", "structicmpv6__ndp__opt__stllao__t.html", [
      [ "length", "structicmpv6__ndp__opt__stllao__t.html#aee9ee1714c76a3c0418bc1197cee294f", null ],
      [ "type", "structicmpv6__ndp__opt__stllao__t.html#a475c2064661165df71d3d38fc8914a4e", null ]
    ] ],
    [ "icmpv6_ndp_opt_pi_t", "structicmpv6__ndp__opt__pi__t.html", [
      [ "addr", "structicmpv6__ndp__opt__pi__t.html#a490507cede454613d936a4a8ad61d473", null ],
      [ "l_a_reserved1", "structicmpv6__ndp__opt__pi__t.html#afe148bb1e8b8ccb28a21da04e575a44f", null ],
      [ "length", "structicmpv6__ndp__opt__pi__t.html#a37de22b1ae8af00ba577d45b663bbcfa", null ],
      [ "pref_ltime", "structicmpv6__ndp__opt__pi__t.html#a19af22766a5f8dc7d76cafaac637a767", null ],
      [ "prefix_length", "structicmpv6__ndp__opt__pi__t.html#a94626b19098e1052b1e48cf1f9299715", null ],
      [ "reserved2", "structicmpv6__ndp__opt__pi__t.html#a845a450d7447dff6e7589a16a9f9c860", null ],
      [ "type", "structicmpv6__ndp__opt__pi__t.html#a8641bea5f3e202cf9e0a83aa24a19211", null ],
      [ "val_ltime", "structicmpv6__ndp__opt__pi__t.html#a4869adde2eecf6b1bff1735006d78193", null ]
    ] ],
    [ "icmpv6_ndp_opt_mtu_t", "structicmpv6__ndp__opt__mtu__t.html", [
      [ "length", "structicmpv6__ndp__opt__mtu__t.html#ac13345174af4cda42dddec610ff0c53d", null ],
      [ "mtu", "structicmpv6__ndp__opt__mtu__t.html#aa18cf97db58da6e7384c0b6a84410c2a", null ],
      [ "reserved", "structicmpv6__ndp__opt__mtu__t.html#af430ec7e2998f4d77506469d999b6a95", null ],
      [ "type", "structicmpv6__ndp__opt__mtu__t.html#a7418b8437d5eaa66d5dce5243dd23a04", null ]
    ] ],
    [ "icmpv6_ndp_opt_aro_t", "structicmpv6__ndp__opt__aro__t.html", [
      [ "eui64", "structicmpv6__ndp__opt__aro__t.html#a6e63e56b5045527fcc14300e22f44707", null ],
      [ "length", "structicmpv6__ndp__opt__aro__t.html#aef9250dbed1cd206e2a4c19483ff9de2", null ],
      [ "reg_ltime", "structicmpv6__ndp__opt__aro__t.html#a75384e4e9cce207263b917b2e076f2d4", null ],
      [ "reserved1", "structicmpv6__ndp__opt__aro__t.html#a2297488c30019eb05e6672edae1e3238", null ],
      [ "reserved2", "structicmpv6__ndp__opt__aro__t.html#a01500304d5b706c734006f92bc1d5109", null ],
      [ "status", "structicmpv6__ndp__opt__aro__t.html#a21f7e1c4199a4ff07434df05d1d0a198", null ],
      [ "type", "structicmpv6__ndp__opt__aro__t.html#a8b5fd9504c55ffa45358c2225fe77505", null ]
    ] ],
    [ "icmpv6_ndp_opt_6co_hdr_t", "structicmpv6__ndp__opt__6co__hdr__t.html", [
      [ "c_flags", "structicmpv6__ndp__opt__6co__hdr__t.html#aa237b38517ab7066a06112c0e05dac75", null ],
      [ "c_length", "structicmpv6__ndp__opt__6co__hdr__t.html#a5fff6746756cd109ec0ccee2d3fcb0c3", null ],
      [ "length", "structicmpv6__ndp__opt__6co__hdr__t.html#a9098cea222c55237839d9ea123cec227", null ],
      [ "reserved", "structicmpv6__ndp__opt__6co__hdr__t.html#a8fa38f50605aa26644c71b3419caf4f3", null ],
      [ "type", "structicmpv6__ndp__opt__6co__hdr__t.html#a594e46c8f3054e3c80d4714a1e7cc4be", null ],
      [ "val_ltime", "structicmpv6__ndp__opt__6co__hdr__t.html#a5520109f0016c8430823c0382b7e3966", null ]
    ] ],
    [ "icmpv6_ndp_opt_abro_t", "structicmpv6__ndp__opt__abro__t.html", [
      [ "addr", "structicmpv6__ndp__opt__abro__t.html#ad508e5a2ae48f1ab35711778a5236523", null ],
      [ "length", "structicmpv6__ndp__opt__abro__t.html#a600222fcfbe56ec2fcba0dde9b1160cf", null ],
      [ "reserved", "structicmpv6__ndp__opt__abro__t.html#ac71525bea553a763ebfe48dbaba1cd95", null ],
      [ "type", "structicmpv6__ndp__opt__abro__t.html#a14ff0ee1de6e6e5e0ea59cd013e197ab", null ],
      [ "version", "structicmpv6__ndp__opt__abro__t.html#a160bb65047ff94f48ed68e60517aeb76", null ]
    ] ],
    [ "ICMPV6_NDP_OPT_6CO_FLAG_CCOMPR", "group__net__sixlowpan__types.html#gacd4bf2db1f5d46c3405beee6a76bce92", null ],
    [ "ICMPV6_NDP_OPT_6CO_FLAG_CID", "group__net__sixlowpan__types.html#ga67e336884e0451f8647b0d35ae34c713", null ],
    [ "ICMPV6_NDP_OPT_PI_FLAG_AUTONOM", "group__net__sixlowpan__types.html#gad96eb1fe973839603602233b4885c7cd", null ],
    [ "ICMPV6_NDP_OPT_PI_FLAG_ON_LINK", "group__net__sixlowpan__types.html#gaf1cf6a78aaf10fffd440be86a87dccb1", null ],
    [ "ICMPV6_NEIGHBOR_ADV_FLAG_OVERRIDE", "group__net__sixlowpan__types.html#gadc9450b4bf8f5211487bb1767b91181f", null ],
    [ "ICMPV6_NEIGHBOR_ADV_FLAG_ROUTER", "group__net__sixlowpan__types.html#gab56b4c47840f49eab0b5b11908e95394", null ],
    [ "ICMPV6_NEIGHBOR_ADV_FLAG_SOLICITED", "group__net__sixlowpan__types.html#ga2306091cf8fb1c353c97fe1af45d75f2", null ],
    [ "ICMPV6_ROUTER_ADV_FLAG_MANAGED", "group__net__sixlowpan__types.html#ga5d6710055859d3c3ee5a01b49f57b6dc", null ],
    [ "ICMPV6_ROUTER_ADV_FLAG_OTHER", "group__net__sixlowpan__types.html#gaa4d145957afed452722823fe389a63f8", null ],
    [ "ndp_addr_state_t", "group__net__sixlowpan__types.html#ga55bdd36ba903a820b097abbfef0778e8", [
      [ "NDP_ADDR_STATE_TENTATIVE", "group__net__sixlowpan__types.html#gga55bdd36ba903a820b097abbfef0778e8ae1d06b5e6e57ae6f2ef52d8455e222f0", null ],
      [ "NDP_ADDR_STATE_PREFERRED", "group__net__sixlowpan__types.html#gga55bdd36ba903a820b097abbfef0778e8a28b7f1956105a5a31c2bb666410d89b2", null ],
      [ "NDP_ADDR_STATE_DEPRECATED", "group__net__sixlowpan__types.html#gga55bdd36ba903a820b097abbfef0778e8a96b70d89cf7c61a12ab171a244318ba0", null ],
      [ "NDP_ADDR_STATE_ANY", "group__net__sixlowpan__types.html#gga55bdd36ba903a820b097abbfef0778e8acaaea38843ba0ab2421007bf734e4e53", null ]
    ] ]
];