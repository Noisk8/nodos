"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@nextui-org/react";
import SkeletonGateways from "../Skeletons/SkeletonGateways";

interface BambinoProps {
  location: {
    two_letter_iso_country_code: string;
    three_letter_iso_country_code: string;
    country_name: string;
    latitude: number;
    longitude: number;
  };
  status: string;
  pledge_amount: {
    denom: string;
    amount: string;
  };
  total_delegation: {
    denom: string;
    amount: string;
  };
  owner: string;
  layer: number;
  mix_node: {
    host: string;
    mix_port: number;
    verloc_port: number;
    http_api_port: number;
    sphinx_key: string;
    identity_key: string;
    version: string;
  };
  stake_saturation: number;
  uncapped_saturation: number;
  avg_uptime: number;
  node_performance: {
    most_recent: string;
    last_hour: string;
    last_24h: string;
  };
  estimated_operator_apy: number;
  estimated_delegators_apy: number;
  operating_cost: {
    amount: number;
  };
  profit_margin_percent: string;
  family_id: null | string;
  blacklisted: boolean;
  gateway_identity_key: string;
  bonded: boolean;
  performance: number;
  self_described: {
    authenticator: {
      address: string;
    };
    auxiliary_details: {
      accepted_operator_terms_and_conditions: boolean;
      location: null | string;
    };
    build_information: {
      binary_name: string;
      build_timestamp: string;
      build_version: string;
      cargo_profile: string;
      cargo_triple: string;
      commit_branch: string;
      commit_sha: string;
      commit_timestamp: string;
      rustc_channel: string;
      rustc_version: string;
    };
    host_information: {
      hostname: string;
      ip_address: string[];
      keys: {
        ed25519: string;
        x25519: string;
      };
    };
    ip_packet_router: {
      address: string;
    };
    last_polled: string;
    mixnet_websockets: {
      ws_port: number;
      wss_port: number;
    };
    network_requester: {
      address: string;
      uses_exit_policy: boolean;
    };
    role: string;
  };
  explorer_pretty_bond: {
    block_height: number;
    gateway: {
      clients_port: number;
      host: string;
      identity_key: string;
      location: string;
      mix_port: number;
      sphinx_key: string;
      version: string;
    };
    location: {
      country_name: string;
      latitude: number;
      longitude: number;
      three_letter_iso_country_code: string;
      two_letter_iso_country_code: string;
    };
    owner: string;
    pledge_amount: {
      amount: string;
      denom: string;
    };
    proxy: null | string;
  };
  description: {
    moniker: string;
    website: string;
    security_contact: string;
    details: string;
  };
  last_probe_result: {
    gateway: string;
    outcome: {
      as_entry: {
        can_connect: boolean;
        can_route: boolean;
      };
      as_exit: {
        can_connect: boolean;
        can_route_ip_external_v4: boolean;
        can_route_ip_external_v6: boolean;
        can_route_ip_v4: boolean;
        can_route_ip_v6: boolean;
      };
      wg: {
        can_handshake: boolean;
        can_register: boolean;
        can_resolve_dns: boolean;
        ping_hosts_performance: number;
        ping_ips_performance: number;
      };
    };
  };
}

export default function Bambino() {
  const [data, setData] = useState<BambinoProps | null>(null);

  useEffect(() => {
    axios
      .get(
        "https://harbourmaster.nymtech.net/v2/gateways/98uf1hyzmWTinkyc5PGyCxDo3E9QQK5XhWQ8B8z8aFoX"
      )
      .then((response) => {
        setData(response.data);
      });
  }, []);

  if (!data) {
    return <SkeletonGateways />;
  }

  return (
    <Card>
      <div
        className="max-w-1xl mx-auto mt-8"
        style={{
          boxShadow:
            "0 8px 12px -2px rgba(255, 0, 255, 0.1), 0 4px 8px -2px rgba(255, 0, 255, 0.06)",
        }}
      >
        <div className="shadow-lg rounded-lg overflow-hidden bg-gray-900 mt-8">
          <h1 className="text-2xl pb-4 bg-gray-800 px-4 py-2 font-bold text-center">
            {data.description.moniker} 🇺🇸
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
            {[
              { label: "Details", value: data.description.details },
              { label: "Identity Key", value: data.gateway_identity_key },
              {
                label: "Location",
                value: data.explorer_pretty_bond.location.country_name,
              },
              {
                label: "HostName",
                value: data.self_described.host_information.hostname,
              },
              {
                label: "IP Address",
                value:
                  data.self_described.host_information.ip_address.join(", "),
              },
              { label: "Role", value: data.self_described.role },

              {
                label: "Version",
                value: data.explorer_pretty_bond.gateway.version,
              },

              {
                label: "As Entry - Can Connect",
                value: data.last_probe_result.outcome.as_entry.can_connect
                  ? "🟢 Yes"
                  : "🔴 No",
              },
              {
                label: "As Entry - Can Route",
                value: data.last_probe_result.outcome.as_entry.can_route
                  ? "🟢 Yes"
                  : "🔴 No",
              },
              {
                label: "As Exit - Can Connect",
                value: data.last_probe_result.outcome.as_exit.can_connect
                  ? "🟢 Yes"
                  : "🔴 No",
              },
              {
                label: "As Exit - Can Route IP External v4",
                value: data.last_probe_result.outcome.as_exit
                  .can_route_ip_external_v4
                  ? "🟢 Yes"
                  : "🔴 No",
              },
              {
                label: "As Exit - Can Route IP External v6",
                value: data.last_probe_result.outcome.as_exit
                  .can_route_ip_external_v6
                  ? "🟢 Yes"
                  : "🔴 No",
              },
              {
                label: "As Exit - Can Route IP v4",
                value: data.last_probe_result.outcome.as_exit.can_route_ip_v4
                  ? "🟢 Yes"
                  : "🔴 No",
              },
              {
                label: "As Exit - Can Route IP v6",
                value: data.last_probe_result.outcome.as_exit.can_route_ip_v6
                  ? "🟢 Yes"
                  : "🔴 No",
              },
              {
                label: "WG - Can Handshake",
                value: data.last_probe_result.outcome.wg.can_handshake
                  ? "🟢 Yes"
                  : "🔴 No",
              },
              {
                label: "WG - Can Register",
                value: data.last_probe_result.outcome.wg.can_register
                  ? "🟢 Yes"
                  : "🔴 No",
              },
              {
                label: "WG - Can Resolve DNS",
                value: data.last_probe_result.outcome.wg.can_resolve_dns
                  ? "🟢 Yes"
                  : "🔴 No",
              },
              {
                label: "WG - Ping Hosts Performance",
                value: data.last_probe_result.outcome.wg.ping_hosts_performance,
              },
              {
                label: "WG - Ping IPs Performance",
                value: data.last_probe_result.outcome.wg.ping_ips_performance,
              },
            ].map((item, index) => (
              <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{item.label}:</h3>
                <p
                  className={
                    typeof item.value === "string" && item.value.includes("🟢")
                      ? "text-green-500"
                      : typeof item.value === "string" &&
                        item.value.includes("🔴")
                      ? "text-red-500"
                      : ""
                  }
                >
                  {item.value}
                </p>
              </div>
            ))}
            <div className="col-span-full text-center pb-4 pt-8">
              <a
                href="https://harbourmaster.nymtech.net/mixnode/869"
                target="_blank"
                className="bg-gray-800 hover:bg-purple-300 text-white font-bold py-4 px-4 rounded"
              >
                Ver en Explorer
              </a>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
