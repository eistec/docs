var group__netapi =
[
    [ "netapi.h", "netapi_8h.html", null ],
    [ "netapi_msg_t", "structnetapi__msg__t.html", [
      [ "type", "structnetapi__msg__t.html#a538c8141be2a69c11e7719b8403da937", null ]
    ] ],
    [ "netapi_ack_t", "structnetapi__ack__t.html", [
      [ "orig", "structnetapi__ack__t.html#a3f91fb16219e9422e18d4f9c3bcd45c2", null ],
      [ "result", "structnetapi__ack__t.html#a48e21aa8c0fe130fc60792ed6c9b885c", null ],
      [ "type", "structnetapi__ack__t.html#a6e0ce7b8c243ba55e2d703519cef2063", null ]
    ] ],
    [ "netapi_cmd_t", "structnetapi__cmd__t.html", [
      [ "ack", "structnetapi__cmd__t.html#a8a0182e4a46e828c2306bcb7db4bd7c1", null ],
      [ "type", "structnetapi__cmd__t.html#a64275435b989008b0ca1c2af4b1f586f", null ]
    ] ],
    [ "netapi_rcv_pkt_t", "structnetapi__rcv__pkt__t.html", [
      [ "ack", "structnetapi__rcv__pkt__t.html#a8a29dfce79892bdc3e8ff38fd81ad4bb", null ],
      [ "data", "structnetapi__rcv__pkt__t.html#a409f42e8c5c3cea58c6c909d8eb18d2c", null ],
      [ "data_len", "structnetapi__rcv__pkt__t.html#a351c3d0afcd752e64e7006615c7b94d8", null ],
      [ "dest", "structnetapi__rcv__pkt__t.html#aeb37306ccd65efad75138180969ff963", null ],
      [ "dest_len", "structnetapi__rcv__pkt__t.html#a232dedef420310d1e26f36414a99b0b6", null ],
      [ "src", "structnetapi__rcv__pkt__t.html#a53fa6db14f8edaa68f966ce0a49bd00b", null ],
      [ "src_len", "structnetapi__rcv__pkt__t.html#a81c385034e8b45604bb62293384b6a86", null ],
      [ "type", "structnetapi__rcv__pkt__t.html#a2a56d9974594e15bb37cf79e96c55afd", null ]
    ] ],
    [ "netapi_snd_pkt_t", "structnetapi__snd__pkt__t.html", [
      [ "ack", "structnetapi__snd__pkt__t.html#a2abb8b1db6c8fd37af744081e770bbc0", null ],
      [ "data", "structnetapi__snd__pkt__t.html#a1d30a94a05303a47d13cd95e5e277e70", null ],
      [ "data_len", "structnetapi__snd__pkt__t.html#a2483b4d97c549c5afa65fa347c72a18a", null ],
      [ "dest", "structnetapi__snd__pkt__t.html#afd96ea0ca0711b90f9c6c6dbe461a357", null ],
      [ "dest_len", "structnetapi__snd__pkt__t.html#a4687978814fbb70d68b8c7f4bf2f07b7", null ],
      [ "type", "structnetapi__snd__pkt__t.html#a1adcf5d1835e5f8a9af28b79524fedde", null ],
      [ "ulh", "structnetapi__snd__pkt__t.html#a52328387d9f6eefd791c013026944bc9", null ]
    ] ],
    [ "netapi_conf_t", "structnetapi__conf__t.html", [
      [ "ack", "structnetapi__conf__t.html#afcd897adfc66e4c8baf417c2dfea4890", null ],
      [ "data", "structnetapi__conf__t.html#aa6f9cac54dae75c03fab2c317c7d2659", null ],
      [ "data_len", "structnetapi__conf__t.html#a6089af94baca7bd7a261164bd2044152", null ],
      [ "param", "structnetapi__conf__t.html#a7ec7bc1d30a3563b61fee73e56705a9b", null ],
      [ "type", "structnetapi__conf__t.html#a0faa9b3f181bbfbded6e286ec7457c7f", null ]
    ] ],
    [ "netapi_reg_t", "structnetapi__reg__t.html", [
      [ "ack", "structnetapi__reg__t.html#a59d73adc5744840ab38b84b3d4d9943a", null ],
      [ "demux_ctx", "structnetapi__reg__t.html#a806189e19c8f6e15e98025c29e21e580", null ],
      [ "reg_pid", "structnetapi__reg__t.html#a5df7cd7edd328f5c1ae65aabc44e46bc", null ],
      [ "type", "structnetapi__reg__t.html#a8101d6cd33fd42041a718587763a0b84", null ]
    ] ],
    [ "NETAPI_MSG_TYPE", "group__netapi.html#gadc119810109b9633e733877564a9d7fa", null ],
    [ "NETAPI_STATUS_OK", "group__netapi.html#gabdf5e0f4404de2ece34cee84f98cceb4", null ],
    [ "netapi_reg_demux_ctx_t", "group__netapi.html#ga0872ffd21f5796cdfe32340cb24801da", null ],
    [ "netapi_cmd_type_t", "group__netapi.html#ga08e3c1e1079c44c0d9bbbff888340380", [
      [ "NETAPI_CMD_RCV", "group__netapi.html#gga08e3c1e1079c44c0d9bbbff888340380afa0c0802184c399b92516f44b1973c54", null ],
      [ "NETAPI_CMD_SND", "group__netapi.html#gga08e3c1e1079c44c0d9bbbff888340380a3e2a4b87e2ef39da6fea724af6788862", null ],
      [ "NETAPI_CMD_GET", "group__netapi.html#gga08e3c1e1079c44c0d9bbbff888340380a58534959645ceec6d8a12e6144a36afc", null ],
      [ "NETAPI_CMD_SET", "group__netapi.html#gga08e3c1e1079c44c0d9bbbff888340380a7c7cc5d8322a4c03789ca9ac77dc4742", null ],
      [ "NETAPI_CMD_REG", "group__netapi.html#gga08e3c1e1079c44c0d9bbbff888340380a066c8f4abc10bb26e69cfff302bc6895", null ],
      [ "NETAPI_CMD_UNREG", "group__netapi.html#gga08e3c1e1079c44c0d9bbbff888340380a2342e827ede5b0f503d54f808acebe90", null ],
      [ "NETAPI_CMD_ACK", "group__netapi.html#gga08e3c1e1079c44c0d9bbbff888340380a9b5013f6641f14ab4385b37cd6413653", null ]
    ] ],
    [ "netapi_conf_type_t", "group__netapi.html#ga2e92c5822a1dc8f031b1fb9479d58cf1", [
      [ "NETAPI_CONF_PROTO", "group__netapi.html#gga2e92c5822a1dc8f031b1fb9479d58cf1ac492b855beace18c1c50b914f8a69a16", null ],
      [ "NETAPI_CONF_CARRIER", "group__netapi.html#gga2e92c5822a1dc8f031b1fb9479d58cf1ad7788f0bdb51d7ca018eada1122c9f46", null ],
      [ "NETAPI_CONF_ADDRESS", "group__netapi.html#gga2e92c5822a1dc8f031b1fb9479d58cf1a6aff52cbb015a877ef46f2988839a189", null ],
      [ "NETAPI_CONF_SUBNETS", "group__netapi.html#gga2e92c5822a1dc8f031b1fb9479d58cf1af705228ee677de9537295a011d936da9", null ],
      [ "NETAPI_CONF_MAX_PACKET_SIZE", "group__netapi.html#gga2e92c5822a1dc8f031b1fb9479d58cf1a72726bb40adb01f70d02be40779ea3ef", null ],
      [ "NETAPI_CONF_SRC_LEN", "group__netapi.html#gga2e92c5822a1dc8f031b1fb9479d58cf1a0e6ccb73608b8c990232cf081c4c6666", null ],
      [ "NETAPI_CONF_REGISTRY", "group__netapi.html#gga2e92c5822a1dc8f031b1fb9479d58cf1a7dbe3a8681026be28a39435d7f66dfbe", null ]
    ] ]
];