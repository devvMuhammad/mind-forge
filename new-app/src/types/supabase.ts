export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          operationName?: string;
          query?: string;
          variables?: Json;
          extensions?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      posts: {
        Row: {
          author_id: string;
          content: string;
          created_at: string;
          id: number;
          subject: Database["public"]["Enums"]["QuestionSubject"];
          title: string;
        };
        Insert: {
          author_id?: string;
          content: string;
          created_at?: string;
          id?: number;
          subject: Database["public"]["Enums"]["QuestionSubject"];
          title: string;
        };
        Update: {
          author_id?: string;
          content?: string;
          created_at?: string;
          id?: number;
          subject?: Database["public"]["Enums"]["QuestionSubject"];
          title?: string;
        };
        Relationships: [
          {
            foreignKeyName: "posts_author_id_fkey";
            columns: ["author_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          }
        ];
      };
      profiles: {
        Row: {
          category: Database["public"]["Enums"]["TestCategory"] | null;
          created_at: string;
          id: string;
          name: string;
          role: Database["public"]["Enums"]["role"];
        };
        Insert: {
          category?: Database["public"]["Enums"]["TestCategory"] | null;
          created_at?: string;
          id?: string;
          name?: string;
          role?: Database["public"]["Enums"]["role"];
        };
        Update: {
          category?: Database["public"]["Enums"]["TestCategory"] | null;
          created_at?: string;
          id?: string;
          name?: string;
          role?: Database["public"]["Enums"]["role"];
        };
        Relationships: [];
      };
      questions: {
        Row: {
          answer: number;
          explanation: string | null;
          id: number;
          options: Json;
          statement: string;
          subject: Database["public"]["Enums"]["QuestionSubject"];
          test_id: string;
        };
        Insert: {
          answer: number;
          explanation?: string | null;
          id?: number;
          options: Json;
          statement: string;
          subject: Database["public"]["Enums"]["QuestionSubject"];
          test_id: string;
        };
        Update: {
          answer?: number;
          explanation?: string | null;
          id?: number;
          options?: Json;
          statement?: string;
          subject?: Database["public"]["Enums"]["QuestionSubject"];
          test_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "questions_test_id_fkey";
            columns: ["test_id"];
            isOneToOne: false;
            referencedRelation: "tests";
            referencedColumns: ["id"];
          }
        ];
      };
      registrations: {
        Row: {
          category: Database["public"]["Enums"]["TestCategory"];
          created_at: string;
          email: string;
          id: number;
          name: string;
          screenshot_url: string;
        };
        Insert: {
          category: Database["public"]["Enums"]["TestCategory"];
          created_at?: string;
          email: string;
          id?: number;
          name: string;
          screenshot_url: string;
        };
        Update: {
          category?: Database["public"]["Enums"]["TestCategory"];
          created_at?: string;
          email?: string;
          id?: number;
          name?: string;
          screenshot_url?: string;
        };
        Relationships: [];
      };
      replies: {
        Row: {
          author_id: string;
          content: string;
          created_at: string;
          id: number;
          post_id: number;
        };
        Insert: {
          author_id?: string;
          content: string;
          created_at?: string;
          id?: number;
          post_id: number;
        };
        Update: {
          author_id?: string;
          content?: string;
          created_at?: string;
          id?: number;
          post_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "replies_post_id_fkey";
            columns: ["post_id"];
            isOneToOne: false;
            referencedRelation: "posts";
            referencedColumns: ["id"];
          }
        ];
      };
      results: {
        Row: {
          created_at: string;
          id: number;
          profile_id: string;
          scores: Json;
          test_id: string;
          total: number;
          wrong: Json;
        };
        Insert: {
          created_at?: string;
          id?: number;
          profile_id?: string;
          scores: Json;
          test_id?: string;
          total: number;
          wrong: Json;
        };
        Update: {
          created_at?: string;
          id?: number;
          profile_id?: string;
          scores?: Json;
          test_id?: string;
          total?: number;
          wrong?: Json;
        };
        Relationships: [
          {
            foreignKeyName: "results_profile_id_fkey";
            columns: ["profile_id"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "results_test_id_fkey";
            columns: ["test_id"];
            isOneToOne: false;
            referencedRelation: "tests";
            referencedColumns: ["id"];
          }
        ];
      };
      tests: {
        Row: {
          attempts: number;
          category: Database["public"]["Enums"]["TestCategory"];
          created_at: string;
          id: string;
          last_changed: string;
          last_changed_by: string;
          published: boolean;
          title: string;
        };
        Insert: {
          attempts: number;
          category: Database["public"]["Enums"]["TestCategory"];
          created_at?: string;
          id?: string;
          last_changed?: string;
          last_changed_by: string;
          published?: boolean;
          title: string;
        };
        Update: {
          attempts?: number;
          category?: Database["public"]["Enums"]["TestCategory"];
          created_at?: string;
          id?: string;
          last_changed?: string;
          last_changed_by?: string;
          published?: boolean;
          title?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      QuestionSubject:
        | "mathematics"
        | "physics"
        | "chemistry"
        | "english"
        | "iq"
        | "biology"
        | "computer"
        | "basic_maths";
      role: "founder" | "student";
      TestCategory: "engineering" | "medical" | "ics" | "business";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
      PublicSchema["Views"])
  ? (PublicSchema["Tables"] &
      PublicSchema["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
  ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
  ? PublicSchema["Enums"][PublicEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
  ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never;
