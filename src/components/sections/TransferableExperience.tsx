import { motion } from 'framer-motion'

export default function TransferableExperience() {
  return (
    <section id="transferable-experience" className="bg-slate-900/60 shadow-none rounded-xl p-6 lg:p-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-indigo-400 text-2xl md:text-3xl font-extrabold tracking-wider mb-10">
          TRANSFERABLE EXPERIENCE
        </h2>

        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Entry 1 */}
          <motion.div 
            className="bg-gray-800/90 border border-gray-700 rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-white text-lg font-semibold">Private Tutor — Self-employed</h3>
              <span className="text-gray-400">Sep. 2023 — Present</span>
            </div>
            <ul className="list-disc pl-5 mt-3 text-gray-300 space-y-2">
              <li>Developed strong communication and mentoring skills by providing personalized academic support across multiple subjects.</li>
              <li>Adapted complex explanations to diverse learning styles, strengthening problem-solving and pedagogical abilities.</li>
              <li>Managed scheduling and client relations, demonstrating autonomy and high responsibility.</li>
            </ul>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-gray-700" />

          {/* Entry 2 */}
          <motion.div 
            className="bg-gray-800/90 border border-gray-700 rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-white text-lg font-semibold">Warehouse Assistant — Que's Lider S.L, Barcelona</h3>
              <span className="text-gray-400">Jul. 2024 – Sep. 2024</span>
            </div>
            <ul className="list-disc pl-5 mt-3 text-gray-300 space-y-2">
              <li>Supported fast-paced logistics operations, including detailed order management and stock control.</li>
              <li>Gained experience in high-volume responsibility and autonomy, ensuring accuracy under pressure.</li>
              <li>Successfully integrated into a team environment to streamline operations.</li>
            </ul>
          </motion.div>

          {/* Divider */}
          <div className="border-t border-gray-700" />

          {/* Entry 3 */}
          <motion.div 
            className="bg-gray-800/90 border border-gray-700 rounded-xl p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-white text-lg font-semibold">Football Coach — Sant Ildelfons</h3>
              <span className="text-gray-400">2021 – 2022</span>
            </div>
            <ul className="list-disc pl-5 mt-3 text-gray-300 space-y-2">
              <li>Planned and executed training sessions for youth teams, fostering discipline and development.</li>
              <li>Strengthened leadership, motivation, and team management skills in a high-engagement environment.</li>
              <li>Served as a mentor, guiding team members toward collective goals and problem resolution.</li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

