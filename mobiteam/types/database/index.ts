export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      addresses: {
        Row: {
          average_reaction_time: number | null;
          average_spent_time: number | null;
          city: string | null;
          contact_person: string | null;
          country_code: string | null;
          created_at: string;
          email: string | null;
          id: number;
          lat: number | null;
          lon: number | null;
          notes: string | null;
          phone: string | null;
          state: string | null;
          street: string | null;
          working_days: string[] | null;
          working_hour_max: number | null;
          working_hour_min: number | null;
          zip_code: string | null;
        };
        Insert: {
          average_reaction_time?: number | null;
          average_spent_time?: number | null;
          city?: string | null;
          contact_person?: string | null;
          country_code?: string | null;
          created_at?: string;
          email?: string | null;
          id?: number;
          lat?: number | null;
          lon?: number | null;
          notes?: string | null;
          phone?: string | null;
          state?: string | null;
          street?: string | null;
          working_days?: string[] | null;
          working_hour_max?: number | null;
          working_hour_min?: number | null;
          zip_code?: string | null;
        };
        Update: {
          average_reaction_time?: number | null;
          average_spent_time?: number | null;
          city?: string | null;
          contact_person?: string | null;
          country_code?: string | null;
          created_at?: string;
          email?: string | null;
          id?: number;
          lat?: number | null;
          lon?: number | null;
          notes?: string | null;
          phone?: string | null;
          state?: string | null;
          street?: string | null;
          working_days?: string[] | null;
          working_hour_max?: number | null;
          working_hour_min?: number | null;
          zip_code?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "addresses_country_code_fkey";
            columns: ["country_code"];
            referencedRelation: "countries";
            referencedColumns: ["iso"];
          }
        ];
      };
      app_data: {
        Row: {
          created_at: string;
          driver_id: number | null;
          id: number;
          lat: number | null;
          lon: number | null;
          speed: number | null;
        };
        Insert: {
          created_at?: string;
          driver_id?: number | null;
          id?: number;
          lat?: number | null;
          lon?: number | null;
          speed?: number | null;
        };
        Update: {
          created_at?: string;
          driver_id?: number | null;
          id?: number;
          lat?: number | null;
          lon?: number | null;
          speed?: number | null;
        };
        Relationships: [];
      };
      assets: {
        Row: {
          cargo_data: number | null;
          company_id: number | null;
          created_at: string;
          eld_device_id: string | null;
          external_ids_attributes: string | null;
          group_id: number | null;
          id: number;
          model: string | null;
          notes: string | null;
          number: string | null;
          type: string | null;
          vin: string | null;
        };
        Insert: {
          cargo_data?: number | null;
          company_id?: number | null;
          created_at?: string;
          eld_device_id?: string | null;
          external_ids_attributes?: string | null;
          group_id?: number | null;
          id?: number;
          model?: string | null;
          notes?: string | null;
          number?: string | null;
          type?: string | null;
          vin?: string | null;
        };
        Update: {
          cargo_data?: number | null;
          company_id?: number | null;
          created_at?: string;
          eld_device_id?: string | null;
          external_ids_attributes?: string | null;
          group_id?: number | null;
          id?: number;
          model?: string | null;
          notes?: string | null;
          number?: string | null;
          type?: string | null;
          vin?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "assets_cargo_data_fkey";
            columns: ["cargo_data"];
            referencedRelation: "cargo_data";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "assets_company_id_fkey";
            columns: ["company_id"];
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "assets_group_id_fkey";
            columns: ["group_id"];
            referencedRelation: "groups";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "assets_type_fkey";
            columns: ["type"];
            referencedRelation: "cargo_types";
            referencedColumns: ["type"];
          }
        ];
      };
      assets_documents: {
        Row: {
          asset_id: number | null;
          created_at: string;
          document_id: number | null;
          id: number;
        };
        Insert: {
          asset_id?: number | null;
          created_at?: string;
          document_id?: number | null;
          id?: number;
        };
        Update: {
          asset_id?: number | null;
          created_at?: string;
          document_id?: number | null;
          id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "assets_documents_asset_id_fkey";
            columns: ["asset_id"];
            referencedRelation: "assets";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "assets_documents_document_id_fkey";
            columns: ["document_id"];
            referencedRelation: "documents";
            referencedColumns: ["id"];
          }
        ];
      };
      cargo_data: {
        Row: {
          axle_amount: number | null;
          axle_load: number | null;
          axle_load_max: number | null;
          cargo_space_height: number | null;
          cargo_space_length: number | null;
          cargo_space_volume: number | null;
          cargo_space_width: number | null;
          created_at: string;
          height: number | null;
          id: number;
          length: number | null;
          max_asset_weight: number | null;
          max_cargo_weight: number | null;
          max_euro_pallets_load: number | null;
          name: string | null;
          weight: number | null;
          weight_max: number | null;
          width: number | null;
        };
        Insert: {
          axle_amount?: number | null;
          axle_load?: number | null;
          axle_load_max?: number | null;
          cargo_space_height?: number | null;
          cargo_space_length?: number | null;
          cargo_space_volume?: number | null;
          cargo_space_width?: number | null;
          created_at?: string;
          height?: number | null;
          id?: number;
          length?: number | null;
          max_asset_weight?: number | null;
          max_cargo_weight?: number | null;
          max_euro_pallets_load?: number | null;
          name?: string | null;
          weight?: number | null;
          weight_max?: number | null;
          width?: number | null;
        };
        Update: {
          axle_amount?: number | null;
          axle_load?: number | null;
          axle_load_max?: number | null;
          cargo_space_height?: number | null;
          cargo_space_length?: number | null;
          cargo_space_volume?: number | null;
          cargo_space_width?: number | null;
          created_at?: string;
          height?: number | null;
          id?: number;
          length?: number | null;
          max_asset_weight?: number | null;
          max_cargo_weight?: number | null;
          max_euro_pallets_load?: number | null;
          name?: string | null;
          weight?: number | null;
          weight_max?: number | null;
          width?: number | null;
        };
        Relationships: [];
      };
      cargo_types: {
        Row: {
          created_at: string;
          id: number;
          type: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          type?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          type?: string | null;
        };
        Relationships: [];
      };
      companies: {
        Row: {
          additional_info: string | null;
          address_office: number | null;
          address_post: number | null;
          company_type: string[] | null;
          contact_person: string | null;
          country_code: string | null;
          created_at: string;
          email: string | null;
          iban: string | null;
          id: number;
          name: string | null;
          notes: string | null;
          other_contact: string | null;
          payment_data: number | null;
          phone: string | null;
          rate_per_km: number | null;
          rating: number | null;
          status: string | null;
          swift: string | null;
          tax_number_nip: string | null;
        };
        Insert: {
          additional_info?: string | null;
          address_office?: number | null;
          address_post?: number | null;
          company_type?: string[] | null;
          contact_person?: string | null;
          country_code?: string | null;
          created_at?: string;
          email?: string | null;
          iban?: string | null;
          id?: number;
          name?: string | null;
          notes?: string | null;
          other_contact?: string | null;
          payment_data?: number | null;
          phone?: string | null;
          rate_per_km?: number | null;
          rating?: number | null;
          status?: string | null;
          swift?: string | null;
          tax_number_nip?: string | null;
        };
        Update: {
          additional_info?: string | null;
          address_office?: number | null;
          address_post?: number | null;
          company_type?: string[] | null;
          contact_person?: string | null;
          country_code?: string | null;
          created_at?: string;
          email?: string | null;
          iban?: string | null;
          id?: number;
          name?: string | null;
          notes?: string | null;
          other_contact?: string | null;
          payment_data?: number | null;
          phone?: string | null;
          rate_per_km?: number | null;
          rating?: number | null;
          status?: string | null;
          swift?: string | null;
          tax_number_nip?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "companies_address_office_fkey";
            columns: ["address_office"];
            referencedRelation: "addresses";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "companies_address_post_fkey";
            columns: ["address_post"];
            referencedRelation: "addresses";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "companies_country_code_fkey";
            columns: ["country_code"];
            referencedRelation: "countries";
            referencedColumns: ["iso"];
          },
          {
            foreignKeyName: "companies_payment_data_fkey";
            columns: ["payment_data"];
            referencedRelation: "payment_data";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "companies_status_fkey";
            columns: ["status"];
            referencedRelation: "company_statuses";
            referencedColumns: ["status"];
          }
        ];
      };
      companies_addresses: {
        Row: {
          address_id: number | null;
          company_id: number | null;
          created_at: string;
          id: number;
        };
        Insert: {
          address_id?: number | null;
          company_id?: number | null;
          created_at?: string;
          id?: number;
        };
        Update: {
          address_id?: number | null;
          company_id?: number | null;
          created_at?: string;
          id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "companies_addresses_address_id_fkey";
            columns: ["address_id"];
            referencedRelation: "addresses";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "companies_addresses_company_id_fkey";
            columns: ["company_id"];
            referencedRelation: "companies";
            referencedColumns: ["id"];
          }
        ];
      };
      companies_groups: {
        Row: {
          company_id: number | null;
          created_at: string;
          group_id: number | null;
          id: number;
        };
        Insert: {
          company_id?: number | null;
          created_at?: string;
          group_id?: number | null;
          id?: number;
        };
        Update: {
          company_id?: number | null;
          created_at?: string;
          group_id?: number | null;
          id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "companies_groups_company_id_fkey";
            columns: ["company_id"];
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "companies_groups_group_id_fkey";
            columns: ["group_id"];
            referencedRelation: "groups";
            referencedColumns: ["id"];
          }
        ];
      };
      companies_orders: {
        Row: {
          company_id: number | null;
          created_at: string;
          id: number;
          order_id: number | null;
        };
        Insert: {
          company_id?: number | null;
          created_at?: string;
          id?: number;
          order_id?: number | null;
        };
        Update: {
          company_id?: number | null;
          created_at?: string;
          id?: number;
          order_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "companies_orders_company_id_fkey";
            columns: ["company_id"];
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "companies_orders_order_id_fkey";
            columns: ["order_id"];
            referencedRelation: "orders";
            referencedColumns: ["id"];
          }
        ];
      };
      company_statuses: {
        Row: {
          created_at: string;
          id: number;
          status: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          status?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          status?: string | null;
        };
        Relationships: [];
      };
      company_types: {
        Row: {
          created_at: string;
          id: number;
          type: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          type?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          type?: string | null;
        };
        Relationships: [];
      };
      countries: {
        Row: {
          created_at: string;
          id: number;
          iso: string | null;
          iso3: string | null;
          name: string | null;
          nicename: string | null;
          numcode: number | null;
          phonecode: number | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          iso?: string | null;
          iso3?: string | null;
          name?: string | null;
          nicename?: string | null;
          numcode?: number | null;
          phonecode?: number | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          iso?: string | null;
          iso3?: string | null;
          name?: string | null;
          nicename?: string | null;
          numcode?: number | null;
          phonecode?: number | null;
        };
        Relationships: [];
      };
      currencies: {
        Row: {
          code: string | null;
          created_at: string;
          decimal_digits: number | null;
          id: number;
          name: string | null;
          name_plural: string | null;
          rounding: number | null;
          symbol: string | null;
          symbol_native: string | null;
        };
        Insert: {
          code?: string | null;
          created_at?: string;
          decimal_digits?: number | null;
          id?: number;
          name?: string | null;
          name_plural?: string | null;
          rounding?: number | null;
          symbol?: string | null;
          symbol_native?: string | null;
        };
        Update: {
          code?: string | null;
          created_at?: string;
          decimal_digits?: number | null;
          id?: number;
          name?: string | null;
          name_plural?: string | null;
          rounding?: number | null;
          symbol?: string | null;
          symbol_native?: string | null;
        };
        Relationships: [];
      };
      doc_forms: {
        Row: {
          created_at: string;
          form: string | null;
          id: number;
        };
        Insert: {
          created_at?: string;
          form?: string | null;
          id?: number;
        };
        Update: {
          created_at?: string;
          form?: string | null;
          id?: number;
        };
        Relationships: [];
      };
      doc_statuses: {
        Row: {
          created_at: string;
          id: number;
          status: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          status?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          status?: string | null;
        };
        Relationships: [];
      };
      doc_types: {
        Row: {
          created_at: string;
          id: number;
          type: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          type?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          type?: string | null;
        };
        Relationships: [];
      };
      documents: {
        Row: {
          asset_id: number | null;
          attachments: Json | null;
          company_id: number | null;
          created_at: string;
          doc_date: string | null;
          doc_form: string | null;
          doc_json_fields: Json | null;
          doc_type: string | null;
          doc_upload_time: string | null;
          expiring_date: string | null;
          group_id: number | null;
          id: number;
          notes: string | null;
          status: string | null;
          uploader_id: string | null;
          user_id: string | null;
          vehicle_id: number | null;
        };
        Insert: {
          asset_id?: number | null;
          attachments?: Json | null;
          company_id?: number | null;
          created_at?: string;
          doc_date?: string | null;
          doc_form?: string | null;
          doc_json_fields?: Json | null;
          doc_type?: string | null;
          doc_upload_time?: string | null;
          expiring_date?: string | null;
          group_id?: number | null;
          id?: number;
          notes?: string | null;
          status?: string | null;
          uploader_id?: string | null;
          user_id?: string | null;
          vehicle_id?: number | null;
        };
        Update: {
          asset_id?: number | null;
          attachments?: Json | null;
          company_id?: number | null;
          created_at?: string;
          doc_date?: string | null;
          doc_form?: string | null;
          doc_json_fields?: Json | null;
          doc_type?: string | null;
          doc_upload_time?: string | null;
          expiring_date?: string | null;
          group_id?: number | null;
          id?: number;
          notes?: string | null;
          status?: string | null;
          uploader_id?: string | null;
          user_id?: string | null;
          vehicle_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "documents_asset_id_fkey";
            columns: ["asset_id"];
            referencedRelation: "assets";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "documents_company_id_fkey";
            columns: ["company_id"];
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "documents_doc_form_fkey";
            columns: ["doc_form"];
            referencedRelation: "doc_forms";
            referencedColumns: ["form"];
          },
          {
            foreignKeyName: "documents_doc_type_fkey";
            columns: ["doc_type"];
            referencedRelation: "doc_types";
            referencedColumns: ["type"];
          },
          {
            foreignKeyName: "documents_group_id_fkey";
            columns: ["group_id"];
            referencedRelation: "groups";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "documents_status_fkey";
            columns: ["status"];
            referencedRelation: "doc_statuses";
            referencedColumns: ["status"];
          },
          {
            foreignKeyName: "documents_uploader_id_fkey";
            columns: ["uploader_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "documents_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "documents_vehicle_id_fkey";
            columns: ["vehicle_id"];
            referencedRelation: "vehicles";
            referencedColumns: ["id"];
          }
        ];
      };
      drive_types: {
        Row: {
          created_at: string;
          id: number;
          type: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          type?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          type?: string | null;
        };
        Relationships: [];
      };
      driver_actions: {
        Row: {
          action: string | null;
          created_at: string;
          id: number;
        };
        Insert: {
          action?: string | null;
          created_at?: string;
          id?: number;
        };
        Update: {
          action?: string | null;
          created_at?: string;
          id?: number;
        };
        Relationships: [];
      };
      driver_cycles: {
        Row: {
          created_at: string | null;
          id: number;
          shift_end: string | null;
          shift_start: string | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          shift_end?: string | null;
          shift_start?: string | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          shift_end?: string | null;
          shift_start?: string | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "driver_cycles_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      driver_cycles_actions: {
        Row: {
          action_end_time: string | null;
          action_id: number | null;
          action_start_time: string | null;
          created_at: string;
          cycle_id: number | null;
          id: number;
        };
        Insert: {
          action_end_time?: string | null;
          action_id?: number | null;
          action_start_time?: string | null;
          created_at?: string;
          cycle_id?: number | null;
          id?: number;
        };
        Update: {
          action_end_time?: string | null;
          action_id?: number | null;
          action_start_time?: string | null;
          created_at?: string;
          cycle_id?: number | null;
          id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "driver_cycles_actions_action_id_fkey";
            columns: ["action_id"];
            referencedRelation: "driver_actions";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "driver_cycles_actions_cycle_id_fkey";
            columns: ["cycle_id"];
            referencedRelation: "driver_cycles";
            referencedColumns: ["id"];
          }
        ];
      };
      driver_cycles_statuses: {
        Row: {
          created_at: string;
          cycle_id: number | null;
          id: number;
          status_end_time: string | null;
          status_id: number | null;
          status_start_time: string | null;
        };
        Insert: {
          created_at?: string;
          cycle_id?: number | null;
          id?: number;
          status_end_time?: string | null;
          status_id?: number | null;
          status_start_time?: string | null;
        };
        Update: {
          created_at?: string;
          cycle_id?: number | null;
          id?: number;
          status_end_time?: string | null;
          status_id?: number | null;
          status_start_time?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "driver_cycles_statuses_cycle_id_fkey";
            columns: ["cycle_id"];
            referencedRelation: "driver_cycles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "driver_cycles_statuses_status_id_fkey";
            columns: ["status_id"];
            referencedRelation: "duty_statuses";
            referencedColumns: ["id"];
          }
        ];
      };
      driver_performance: {
        Row: {
          accuracy: number | null;
          created_at: string;
          fuel_consumption: number | null;
          id: number;
          rank: number | null;
          reaction_time: number | null;
          user_id: string | null;
        };
        Insert: {
          accuracy?: number | null;
          created_at?: string;
          fuel_consumption?: number | null;
          id?: number;
          rank?: number | null;
          reaction_time?: number | null;
          user_id?: string | null;
        };
        Update: {
          accuracy?: number | null;
          created_at?: string;
          fuel_consumption?: number | null;
          id?: number;
          rank?: number | null;
          reaction_time?: number | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "driver_performance_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      duty_statuses: {
        Row: {
          created_at: string;
          id: number;
          status: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          status?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          status?: string | null;
        };
        Relationships: [];
      };
      fleet_user_performance: {
        Row: {
          created_at: string;
          deliveries_stats: number | null;
          empty_runs: number | null;
          hos_accuracy: number | null;
          id: number;
          rank: number | null;
          reaction_time: number | null;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          deliveries_stats?: number | null;
          empty_runs?: number | null;
          hos_accuracy?: number | null;
          id?: number;
          rank?: number | null;
          reaction_time?: number | null;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          deliveries_stats?: number | null;
          empty_runs?: number | null;
          hos_accuracy?: number | null;
          id?: number;
          rank?: number | null;
          reaction_time?: number | null;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "fleet_user_performance_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      freights: {
        Row: {
          cargo_type: string[] | null;
          company_id: number | null;
          created_at: string;
          decision_date: string | null;
          external_id: string | null;
          freight_rank: number | null;
          id: number;
          is_ftl: boolean | null;
          multistop: boolean | null;
          payment_data_id: number | null;
          payment_value: number | null;
          publish_date: string | null;
          quick_pay_trans_eu: boolean | null;
          vehicle_class: string[] | null;
        };
        Insert: {
          cargo_type?: string[] | null;
          company_id?: number | null;
          created_at?: string;
          decision_date?: string | null;
          external_id?: string | null;
          freight_rank?: number | null;
          id?: number;
          is_ftl?: boolean | null;
          multistop?: boolean | null;
          payment_data_id?: number | null;
          payment_value?: number | null;
          publish_date?: string | null;
          quick_pay_trans_eu?: boolean | null;
          vehicle_class?: string[] | null;
        };
        Update: {
          cargo_type?: string[] | null;
          company_id?: number | null;
          created_at?: string;
          decision_date?: string | null;
          external_id?: string | null;
          freight_rank?: number | null;
          id?: number;
          is_ftl?: boolean | null;
          multistop?: boolean | null;
          payment_data_id?: number | null;
          payment_value?: number | null;
          publish_date?: string | null;
          quick_pay_trans_eu?: boolean | null;
          vehicle_class?: string[] | null;
        };
        Relationships: [
          {
            foreignKeyName: "freights_company_id_fkey";
            columns: ["company_id"];
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "freights_payment_data_id_fkey";
            columns: ["payment_data_id"];
            referencedRelation: "payment_data";
            referencedColumns: ["id"];
          }
        ];
      };
      freights_spots: {
        Row: {
          created_at: string;
          freight_id: number | null;
          id: number;
          spot_id: number | null;
          spot_index: number | null;
        };
        Insert: {
          created_at?: string;
          freight_id?: number | null;
          id?: number;
          spot_id?: number | null;
          spot_index?: number | null;
        };
        Update: {
          created_at?: string;
          freight_id?: number | null;
          id?: number;
          spot_id?: number | null;
          spot_index?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "freights_spots_freight_id_fkey";
            columns: ["freight_id"];
            referencedRelation: "freights";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "freights_spots_spot_id_fkey";
            columns: ["spot_id"];
            referencedRelation: "spots";
            referencedColumns: ["id"];
          }
        ];
      };
      fuel_types: {
        Row: {
          created_at: string;
          id: number;
          type: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          type?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          type?: string | null;
        };
        Relationships: [];
      };
      groups: {
        Row: {
          company: number | null;
          created_at: string;
          id: number;
          name: string | null;
        };
        Insert: {
          company?: number | null;
          created_at?: string;
          id?: number;
          name?: string | null;
        };
        Update: {
          company?: number | null;
          created_at?: string;
          id?: number;
          name?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "groups_company_fkey";
            columns: ["company"];
            referencedRelation: "companies";
            referencedColumns: ["id"];
          }
        ];
      };
      groups_assets: {
        Row: {
          asset_id: number | null;
          created_at: string;
          group_id: number | null;
          id: number;
        };
        Insert: {
          asset_id?: number | null;
          created_at?: string;
          group_id?: number | null;
          id?: number;
        };
        Update: {
          asset_id?: number | null;
          created_at?: string;
          group_id?: number | null;
          id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "groups_assets_asset_id_fkey";
            columns: ["asset_id"];
            referencedRelation: "assets";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "groups_assets_group_id_fkey";
            columns: ["group_id"];
            referencedRelation: "groups";
            referencedColumns: ["id"];
          }
        ];
      };
      groups_documents: {
        Row: {
          created_at: string;
          document_id: number | null;
          group_id: number | null;
          id: number;
        };
        Insert: {
          created_at?: string;
          document_id?: number | null;
          group_id?: number | null;
          id?: number;
        };
        Update: {
          created_at?: string;
          document_id?: number | null;
          group_id?: number | null;
          id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "groups_documents_document_id_fkey";
            columns: ["document_id"];
            referencedRelation: "documents";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "groups_documents_group_id_fkey";
            columns: ["group_id"];
            referencedRelation: "groups";
            referencedColumns: ["id"];
          }
        ];
      };
      groups_users: {
        Row: {
          created_at: string;
          group_id: number | null;
          id: number;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          group_id?: number | null;
          id?: number;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          group_id?: number | null;
          id?: number;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "groups_users_group_id_fkey";
            columns: ["group_id"];
            referencedRelation: "groups";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "groups_users_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      groups_vehicles: {
        Row: {
          created_at: string;
          group_id: number | null;
          id: number;
          vehicle_id: number | null;
        };
        Insert: {
          created_at?: string;
          group_id?: number | null;
          id?: number;
          vehicle_id?: number | null;
        };
        Update: {
          created_at?: string;
          group_id?: number | null;
          id?: number;
          vehicle_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "groups_vehicles_group_id_fkey";
            columns: ["group_id"];
            referencedRelation: "groups";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "groups_vehicles_vehicle_id_fkey";
            columns: ["vehicle_id"];
            referencedRelation: "vehicles";
            referencedColumns: ["id"];
          }
        ];
      };
      hos_regions: {
        Row: {
          created_at: string;
          id: number;
          region: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          region?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          region?: string | null;
        };
        Relationships: [];
      };
      load_types: {
        Row: {
          created_at: string;
          id: number;
          type: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          type?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          type?: string | null;
        };
        Relationships: [];
      };
      loads: {
        Row: {
          adr_class: string | null;
          amount: number | null;
          created_at: string;
          dangerous_load: boolean | null;
          description: string | null;
          height: number | null;
          id: number;
          is_stackable: boolean | null;
          length: number | null;
          name: string | null;
          type: string | null;
          un_code: string | null;
          volume: number | null;
          weight: number | null;
          width: number | null;
        };
        Insert: {
          adr_class?: string | null;
          amount?: number | null;
          created_at?: string;
          dangerous_load?: boolean | null;
          description?: string | null;
          height?: number | null;
          id?: number;
          is_stackable?: boolean | null;
          length?: number | null;
          name?: string | null;
          type?: string | null;
          un_code?: string | null;
          volume?: number | null;
          weight?: number | null;
          width?: number | null;
        };
        Update: {
          adr_class?: string | null;
          amount?: number | null;
          created_at?: string;
          dangerous_load?: boolean | null;
          description?: string | null;
          height?: number | null;
          id?: number;
          is_stackable?: boolean | null;
          length?: number | null;
          name?: string | null;
          type?: string | null;
          un_code?: string | null;
          volume?: number | null;
          weight?: number | null;
          width?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "loads_type_fkey";
            columns: ["type"];
            referencedRelation: "load_types";
            referencedColumns: ["type"];
          }
        ];
      };
      message_list: {
        Row: {
          created_at: string;
          id: number;
          message_ids: number[] | null;
          next_offset: number | null;
          prev_offset: number | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          message_ids?: number[] | null;
          next_offset?: number | null;
          prev_offset?: number | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          message_ids?: number[] | null;
          next_offset?: number | null;
          prev_offset?: number | null;
        };
        Relationships: [];
      };
      messages: {
        Row: {
          attachment: string | null;
          created_at: string;
          id: number;
          message: string | null;
          read: string | null;
          receiver: string | null;
          sender: string | null;
          sent: string | null;
        };
        Insert: {
          attachment?: string | null;
          created_at?: string;
          id?: number;
          message?: string | null;
          read?: string | null;
          receiver?: string | null;
          sender?: string | null;
          sent?: string | null;
        };
        Update: {
          attachment?: string | null;
          created_at?: string;
          id?: number;
          message?: string | null;
          read?: string | null;
          receiver?: string | null;
          sender?: string | null;
          sent?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "messages_attachment_fkey";
            columns: ["attachment"];
            referencedRelation: "buckets";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "messages_receiver_fkey";
            columns: ["receiver"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "messages_sender_fkey";
            columns: ["sender"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      messages_v2: {
        Row: {
          attachment: string | null;
          created_at: string;
          id: number;
          message: string | null;
          read: string | null;
          receiver: string | null;
          sender: string | null;
          sent: string | null;
        };
        Insert: {
          attachment?: string | null;
          created_at?: string;
          id?: number;
          message?: string | null;
          read?: string | null;
          receiver?: string | null;
          sender?: string | null;
          sent?: string | null;
        };
        Update: {
          attachment?: string | null;
          created_at?: string;
          id?: number;
          message?: string | null;
          read?: string | null;
          receiver?: string | null;
          sender?: string | null;
          sent?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "messages_v2_attachment_fkey";
            columns: ["attachment"];
            referencedRelation: "buckets";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "messages_v2_receiver_fkey";
            columns: ["receiver"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "messages_v2_sender_fkey";
            columns: ["sender"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      operation_types: {
        Row: {
          created_at: string;
          id: number;
          type: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          type?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          type?: string | null;
        };
        Relationships: [];
      };
      order_statuses: {
        Row: {
          created_at: string;
          id: number;
          status: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          status?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          status?: string | null;
        };
        Relationships: [];
      };
      orders: {
        Row: {
          approved_by: string | null;
          created_at: string;
          created_by: string | null;
          freight_id: number | null;
          id: number;
          name: string | null;
          route_id: number | null;
          status: string | null;
          vehicle_id: number | null;
        };
        Insert: {
          approved_by?: string | null;
          created_at?: string;
          created_by?: string | null;
          freight_id?: number | null;
          id?: number;
          name?: string | null;
          route_id?: number | null;
          status?: string | null;
          vehicle_id?: number | null;
        };
        Update: {
          approved_by?: string | null;
          created_at?: string;
          created_by?: string | null;
          freight_id?: number | null;
          id?: number;
          name?: string | null;
          route_id?: number | null;
          status?: string | null;
          vehicle_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "orders_approved_by_fkey";
            columns: ["approved_by"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "orders_created_by_fkey";
            columns: ["created_by"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "orders_freight_id_fkey";
            columns: ["freight_id"];
            referencedRelation: "freights";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "orders_route_id_fkey";
            columns: ["route_id"];
            referencedRelation: "routes";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "orders_status_fkey";
            columns: ["status"];
            referencedRelation: "order_statuses";
            referencedColumns: ["status"];
          },
          {
            foreignKeyName: "orders_vehicle_id_fkey";
            columns: ["vehicle_id"];
            referencedRelation: "vehicles";
            referencedColumns: ["id"];
          }
        ];
      };
      payment_data: {
        Row: {
          created_at: string;
          currency: string | null;
          id: number;
          payment_period: number | null;
          payment_terms: string | null;
          payment_type: string | null;
          vat: number | null;
        };
        Insert: {
          created_at?: string;
          currency?: string | null;
          id?: number;
          payment_period?: number | null;
          payment_terms?: string | null;
          payment_type?: string | null;
          vat?: number | null;
        };
        Update: {
          created_at?: string;
          currency?: string | null;
          id?: number;
          payment_period?: number | null;
          payment_terms?: string | null;
          payment_type?: string | null;
          vat?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "payment_data_currency_fkey";
            columns: ["currency"];
            referencedRelation: "currencies";
            referencedColumns: ["code"];
          },
          {
            foreignKeyName: "payment_data_payment_terms_fkey";
            columns: ["payment_terms"];
            referencedRelation: "payment_termins";
            referencedColumns: ["termin"];
          },
          {
            foreignKeyName: "payment_data_payment_type_fkey";
            columns: ["payment_type"];
            referencedRelation: "payment_types";
            referencedColumns: ["type"];
          }
        ];
      };
      payment_termins: {
        Row: {
          created_at: string;
          id: number;
          termin: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          termin?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          termin?: string | null;
        };
        Relationships: [];
      };
      payment_types: {
        Row: {
          created_at: string;
          id: number;
          type: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          type?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          type?: string | null;
        };
        Relationships: [];
      };
      rest_types: {
        Row: {
          created_at: string;
          id: number;
          type: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          type?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          type?: string | null;
        };
        Relationships: [];
      };
      route_statuses: {
        Row: {
          created_at: string;
          id: number;
          status: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          status?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          status?: string | null;
        };
        Relationships: [];
      };
      routes: {
        Row: {
          created_at: string;
          estimate_fuel_consumption: number | null;
          ferry_fee: number | null;
          id: number;
          map_link: string | null;
          notes: string | null;
          status: string | null;
          toll_fee: number | null;
        };
        Insert: {
          created_at?: string;
          estimate_fuel_consumption?: number | null;
          ferry_fee?: number | null;
          id?: number;
          map_link?: string | null;
          notes?: string | null;
          status?: string | null;
          toll_fee?: number | null;
        };
        Update: {
          created_at?: string;
          estimate_fuel_consumption?: number | null;
          ferry_fee?: number | null;
          id?: number;
          map_link?: string | null;
          notes?: string | null;
          status?: string | null;
          toll_fee?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "routes_status_fkey";
            columns: ["status"];
            referencedRelation: "route_statuses";
            referencedColumns: ["status"];
          }
        ];
      };
      routes_spots: {
        Row: {
          created_at: string;
          id: number;
          route_id: number | null;
          spot_id: number | null;
          spot_index: number | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          route_id?: number | null;
          spot_id?: number | null;
          spot_index?: number | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          route_id?: number | null;
          spot_id?: number | null;
          spot_index?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "routes_spots_route_id_fkey";
            columns: ["route_id"];
            referencedRelation: "routes";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "routes_spots_spot_id_fkey";
            columns: ["spot_id"];
            referencedRelation: "spots";
            referencedColumns: ["id"];
          }
        ];
      };
      spots: {
        Row: {
          address_id: number | null;
          apl: number | null;
          ata: string | null;
          atd: string | null;
          created_at: string;
          description: string | null;
          epl: number | null;
          eta: string | null;
          etd: string | null;
          id: number;
          is_actual: boolean | null;
          is_customs: boolean | null;
          is_earlier_acceptable: boolean | null;
          is_ferry: boolean | null;
          is_late_acceptable: boolean | null;
          is_next: boolean | null;
          is_previous: boolean | null;
          load_id: number | null;
          name: string | null;
          operation_type: string | null;
        };
        Insert: {
          address_id?: number | null;
          apl?: number | null;
          ata?: string | null;
          atd?: string | null;
          created_at?: string;
          description?: string | null;
          epl?: number | null;
          eta?: string | null;
          etd?: string | null;
          id?: number;
          is_actual?: boolean | null;
          is_customs?: boolean | null;
          is_earlier_acceptable?: boolean | null;
          is_ferry?: boolean | null;
          is_late_acceptable?: boolean | null;
          is_next?: boolean | null;
          is_previous?: boolean | null;
          load_id?: number | null;
          name?: string | null;
          operation_type?: string | null;
        };
        Update: {
          address_id?: number | null;
          apl?: number | null;
          ata?: string | null;
          atd?: string | null;
          created_at?: string;
          description?: string | null;
          epl?: number | null;
          eta?: string | null;
          etd?: string | null;
          id?: number;
          is_actual?: boolean | null;
          is_customs?: boolean | null;
          is_earlier_acceptable?: boolean | null;
          is_ferry?: boolean | null;
          is_late_acceptable?: boolean | null;
          is_next?: boolean | null;
          is_previous?: boolean | null;
          load_id?: number | null;
          name?: string | null;
          operation_type?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "spots_address_id_fkey";
            columns: ["address_id"];
            referencedRelation: "addresses";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "spots_load_id_fkey";
            columns: ["load_id"];
            referencedRelation: "loads";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "spots_operation_type_fkey";
            columns: ["operation_type"];
            referencedRelation: "operation_types";
            referencedColumns: ["type"];
          }
        ];
      };
      user_roles: {
        Row: {
          created_at: string;
          id: number;
          role: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          role?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          role?: string | null;
        };
        Relationships: [];
      };
      users: {
        Row: {
          avatar: string | null;
          created_at: string;
          depot: number | null;
          driver_app_pin: number | null;
          driver_id: string | null;
          driver_primary_cycle: string | null;
          duty_status: string | null;
          email: string | null;
          external_ids_attributes: number[] | null;
          first_name: string | null;
          hos_region: string | null;
          id: string;
          is_returning_depot: boolean | null;
          lat: number | null;
          lon: number | null;
          message_list_id: number | null;
          password: string | null;
          phone: string | null;
          roles: string[] | null;
          second_name: string | null;
          username: string | null;
        };
        Insert: {
          avatar?: string | null;
          created_at?: string;
          depot?: number | null;
          driver_app_pin?: number | null;
          driver_id?: string | null;
          driver_primary_cycle?: string | null;
          duty_status?: string | null;
          email?: string | null;
          external_ids_attributes?: number[] | null;
          first_name?: string | null;
          hos_region?: string | null;
          id: string;
          is_returning_depot?: boolean | null;
          lat?: number | null;
          lon?: number | null;
          message_list_id?: number | null;
          password?: string | null;
          phone?: string | null;
          roles?: string[] | null;
          second_name?: string | null;
          username?: string | null;
        };
        Update: {
          avatar?: string | null;
          created_at?: string;
          depot?: number | null;
          driver_app_pin?: number | null;
          driver_id?: string | null;
          driver_primary_cycle?: string | null;
          duty_status?: string | null;
          email?: string | null;
          external_ids_attributes?: number[] | null;
          first_name?: string | null;
          hos_region?: string | null;
          id?: string;
          is_returning_depot?: boolean | null;
          lat?: number | null;
          lon?: number | null;
          message_list_id?: number | null;
          password?: string | null;
          phone?: string | null;
          roles?: string[] | null;
          second_name?: string | null;
          username?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "users_depot_fkey";
            columns: ["depot"];
            referencedRelation: "addresses";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "users_duty_status_fkey";
            columns: ["duty_status"];
            referencedRelation: "duty_statuses";
            referencedColumns: ["status"];
          },
          {
            foreignKeyName: "users_hos_region_fkey";
            columns: ["hos_region"];
            referencedRelation: "hos_regions";
            referencedColumns: ["region"];
          },
          {
            foreignKeyName: "users_id_fkey";
            columns: ["id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "users_message_list_id_fkey";
            columns: ["message_list_id"];
            referencedRelation: "message_list";
            referencedColumns: ["id"];
          }
        ];
      };
      users_companies: {
        Row: {
          company_id: number | null;
          created_at: string;
          id: number;
          user_id: string | null;
        };
        Insert: {
          company_id?: number | null;
          created_at?: string;
          id?: number;
          user_id?: string | null;
        };
        Update: {
          company_id?: number | null;
          created_at?: string;
          id?: number;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "users_companies_company_id_fkey";
            columns: ["company_id"];
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "users_companies_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      users_documents: {
        Row: {
          created_at: string;
          document_id: number | null;
          id: number;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          document_id?: number | null;
          id?: number;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          document_id?: number | null;
          id?: number;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "users_documents_document_id_fkey";
            columns: ["document_id"];
            referencedRelation: "documents";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "users_documents_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      users_groups: {
        Row: {
          created_at: string;
          group_id: number | null;
          id: number;
          user_id: string | null;
        };
        Insert: {
          created_at?: string;
          group_id?: number | null;
          id?: number;
          user_id?: string | null;
        };
        Update: {
          created_at?: string;
          group_id?: number | null;
          id?: number;
          user_id?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "users_groups_group_id_fkey";
            columns: ["group_id"];
            referencedRelation: "groups";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "users_groups_user_id_fkey";
            columns: ["user_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
      vehicle_classes: {
        Row: {
          class: string | null;
          created_at: string;
          id: number;
        };
        Insert: {
          class?: string | null;
          created_at?: string;
          id?: number;
        };
        Update: {
          class?: string | null;
          created_at?: string;
          id?: number;
        };
        Relationships: [];
      };
      vehicle_cycles: {
        Row: {
          created_at: string;
          end: string | null;
          id: number;
          next_driver_changeover_time: number | null;
          start: string | null;
          vehicle_id: number | null;
        };
        Insert: {
          created_at?: string;
          end?: string | null;
          id?: number;
          next_driver_changeover_time?: number | null;
          start?: string | null;
          vehicle_id?: number | null;
        };
        Update: {
          created_at?: string;
          end?: string | null;
          id?: number;
          next_driver_changeover_time?: number | null;
          start?: string | null;
          vehicle_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "vehicle_cycles_vehicle_id_fkey";
            columns: ["vehicle_id"];
            referencedRelation: "vehicles";
            referencedColumns: ["id"];
          }
        ];
      };
      vehicle_cycles_orders: {
        Row: {
          created_at: string;
          id: number;
          order_id: number | null;
          vehicle_cycle_id: number | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          order_id?: number | null;
          vehicle_cycle_id?: number | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          order_id?: number | null;
          vehicle_cycle_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "vehicle_cycles_orders_order_id_fkey";
            columns: ["order_id"];
            referencedRelation: "orders";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "vehicle_cycles_orders_vehicle_cycle_id_fkey";
            columns: ["vehicle_cycle_id"];
            referencedRelation: "vehicle_cycles";
            referencedColumns: ["id"];
          }
        ];
      };
      vehicle_cycles_users: {
        Row: {
          created_at: string;
          driver_id: string | null;
          id: number;
          vehicle_cycle_id: number | null;
        };
        Insert: {
          created_at?: string;
          driver_id?: string | null;
          id?: number;
          vehicle_cycle_id?: number | null;
        };
        Update: {
          created_at?: string;
          driver_id?: string | null;
          id?: number;
          vehicle_cycle_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "vehicle_cycles_users_driver_id_fkey";
            columns: ["driver_id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "vehicle_cycles_users_vehicle_cycle_id_fkey";
            columns: ["vehicle_cycle_id"];
            referencedRelation: "vehicle_cycles";
            referencedColumns: ["id"];
          }
        ];
      };
      vehicle_statuses: {
        Row: {
          created_at: string;
          id: number;
          status: string | null;
        };
        Insert: {
          created_at?: string;
          id?: number;
          status?: string | null;
        };
        Update: {
          created_at?: string;
          id?: number;
          status?: string | null;
        };
        Relationships: [];
      };
      vehicle_telemetry: {
        Row: {
          address: string | null;
          created_at: string;
          engine_hours: number | null;
          fuel: number | null;
          fuel_consumption: number | null;
          id: number;
          lat: number | null;
          lon: number | null;
          speed: number | null;
          status: string | null;
          status_end: string | null;
          status_start: string | null;
          status_time: number | null;
          total_fuel_consumption: number | null;
          total_mileage: number | null;
          vehicle_id: number | null;
        };
        Insert: {
          address?: string | null;
          created_at?: string;
          engine_hours?: number | null;
          fuel?: number | null;
          fuel_consumption?: number | null;
          id?: number;
          lat?: number | null;
          lon?: number | null;
          speed?: number | null;
          status?: string | null;
          status_end?: string | null;
          status_start?: string | null;
          status_time?: number | null;
          total_fuel_consumption?: number | null;
          total_mileage?: number | null;
          vehicle_id?: number | null;
        };
        Update: {
          address?: string | null;
          created_at?: string;
          engine_hours?: number | null;
          fuel?: number | null;
          fuel_consumption?: number | null;
          id?: number;
          lat?: number | null;
          lon?: number | null;
          speed?: number | null;
          status?: string | null;
          status_end?: string | null;
          status_start?: string | null;
          status_time?: number | null;
          total_fuel_consumption?: number | null;
          total_mileage?: number | null;
          vehicle_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "vehicle_telemetry_status_fkey";
            columns: ["status"];
            referencedRelation: "vehicle_statuses";
            referencedColumns: ["status"];
          },
          {
            foreignKeyName: "vehicle_telemetry_vehicle_id_fkey";
            columns: ["vehicle_id"];
            referencedRelation: "vehicles";
            referencedColumns: ["id"];
          }
        ];
      };
      vehicles: {
        Row: {
          asset_id: number | null;
          available_asset_types: string[] | null;
          cargo_data: number | null;
          cargo_type: string | null;
          class: string | null;
          company_id: number | null;
          created_at: string;
          eld_device_id: string | null;
          external_ids_attributes: string | null;
          fuel_type: string | null;
          group_id: number | null;
          has_telemetry: boolean | null;
          id: number;
          is_available: boolean | null;
          is_available_for_partial_load: boolean | null;
          model: string | null;
          number: string | null;
          vin: string | null;
        };
        Insert: {
          asset_id?: number | null;
          available_asset_types?: string[] | null;
          cargo_data?: number | null;
          cargo_type?: string | null;
          class?: string | null;
          company_id?: number | null;
          created_at?: string;
          eld_device_id?: string | null;
          external_ids_attributes?: string | null;
          fuel_type?: string | null;
          group_id?: number | null;
          has_telemetry?: boolean | null;
          id?: number;
          is_available?: boolean | null;
          is_available_for_partial_load?: boolean | null;
          model?: string | null;
          number?: string | null;
          vin?: string | null;
        };
        Update: {
          asset_id?: number | null;
          available_asset_types?: string[] | null;
          cargo_data?: number | null;
          cargo_type?: string | null;
          class?: string | null;
          company_id?: number | null;
          created_at?: string;
          eld_device_id?: string | null;
          external_ids_attributes?: string | null;
          fuel_type?: string | null;
          group_id?: number | null;
          has_telemetry?: boolean | null;
          id?: number;
          is_available?: boolean | null;
          is_available_for_partial_load?: boolean | null;
          model?: string | null;
          number?: string | null;
          vin?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "vehicles_asset_id_fkey";
            columns: ["asset_id"];
            referencedRelation: "assets";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "vehicles_cargo_data_fkey";
            columns: ["cargo_data"];
            referencedRelation: "cargo_data";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "vehicles_cargo_type_fkey";
            columns: ["cargo_type"];
            referencedRelation: "cargo_types";
            referencedColumns: ["type"];
          },
          {
            foreignKeyName: "vehicles_class_fkey";
            columns: ["class"];
            referencedRelation: "vehicle_classes";
            referencedColumns: ["class"];
          },
          {
            foreignKeyName: "vehicles_company_id_fkey";
            columns: ["company_id"];
            referencedRelation: "companies";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "vehicles_fuel_type_fkey";
            columns: ["fuel_type"];
            referencedRelation: "fuel_types";
            referencedColumns: ["type"];
          },
          {
            foreignKeyName: "vehicles_group_id_fkey";
            columns: ["group_id"];
            referencedRelation: "groups";
            referencedColumns: ["id"];
          }
        ];
      };
      vehicles_documents: {
        Row: {
          created_at: string;
          document_id: number | null;
          id: number;
          vehicle_id: number | null;
        };
        Insert: {
          created_at?: string;
          document_id?: number | null;
          id?: number;
          vehicle_id?: number | null;
        };
        Update: {
          created_at?: string;
          document_id?: number | null;
          id?: number;
          vehicle_id?: number | null;
        };
        Relationships: [
          {
            foreignKeyName: "vehicles_documents_document_id_fkey";
            columns: ["document_id"];
            referencedRelation: "documents";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "vehicles_documents_vehicle_id_fkey";
            columns: ["vehicle_id"];
            referencedRelation: "vehicles";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
